const canvas = document.getElementById("drawingCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) {
    throw new Error("2D コンテキストを取得できませんでした");
}

// UI 要素を取得
const colorPicker = document.getElementById("color") as HTMLInputElement;
const lineWidthInput = document.getElementById("lineWidth") as HTMLInputElement;
const lineTypeSelect = document.getElementById("lineType") as HTMLSelectElement;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// マウスイベント
canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const x = event.offsetX;
    const y = event.offsetY;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);

    // 色を設定
    ctx.strokeStyle = colorPicker.value;

    // 線の太さを設定
    ctx.lineWidth = parseInt(lineWidthInput.value, 10);

    // 線種を設定
    const lineType = lineTypeSelect.value;
    if (lineType === "dotted") {
        ctx.setLineDash([1, 5]); // 点線
    } else if (lineType === "dashed") {
        ctx.setLineDash([10, 10]); // 破線
    } else {
        ctx.setLineDash([]); // 実線
    }

    ctx.stroke();

    lastX = x;
    lastY = y;
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// UI 要素の変更イベント
colorPicker.addEventListener("change", () => {
    console.log("色が変更されました:", colorPicker.value);
});

lineWidthInput.addEventListener("change", () => {
    console.log("線の太さが変更されました:", lineWidthInput.value);
});

lineTypeSelect.addEventListener("change", () => {
    console.log("線種が変更されました:", lineTypeSelect.value);
});