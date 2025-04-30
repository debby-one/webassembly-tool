async function init() {
    const wasmModule = await fetch('wasm/module.wasm')
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes));

    console.log('WebAssembly module loaded:', wasmModule.instance);
}

init().catch(err => {
    console.error('Error loading WebAssembly module:', err);
});