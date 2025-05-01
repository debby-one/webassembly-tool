import "./draw";

const canvas = document.getElementById("drawingCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) {
    throw new Error("2D コンテキストを取得できませんでした");
}

const imageData = ctx.createImageData(canvas.width, canvas.height);

async function init() {
    // WebAssembly モジュールをロード
    const wasmModule = await fetch("wasm/module.wasm")
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes));

    const { memory, set_pixel } = wasmModule.instance.exports as {
        memory: WebAssembly.Memory;
        set_pixel: (x: number, y: number, r: number, g: number, b: number, a: number) => void;
    };

    const buffer = new Uint8Array(memory.buffer);

    // マウスイベントで描画
    canvas.addEventListener("mousemove", (event) => {
        if (event.buttons !== 1) return; // マウスの左ボタンが押されている場合のみ描画

        const rect = canvas.getBoundingClientRect();
        const x = Math.floor(event.clientX - rect.left);
        const y = Math.floor(event.clientY - rect.top);

        // WebAssembly の関数を呼び出してピクセルを設定
        set_pixel(x, y, 255, 0, 0, 255); // 赤色で描画

        // フレームバッファを Canvas に反映
        updateCanvas(buffer);
    });

    function updateCanvas(buffer: Uint8Array) {
        for (let i = 0; i < imageData.data.length; i++) {
            imageData.data[i] = buffer[i];
        }
        ctx!.putImageData(imageData, 0, 0); // ctx が null でないことを保証
    }
}

init().catch(err => {
    console.error("Error initializing WebAssembly module:", err);
});