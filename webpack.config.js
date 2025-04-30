const path = require('path');

module.exports = {
    mode: 'development', // 'development' または 'production' を指定
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.wasm'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.wasm$/,
                type: 'asset/resource', // WebAssembly ファイルをリソースとして扱う
                generator: {
                    filename: 'wasm/[name][ext]', // wasm ファイルを dist/wasm に出力
                },
            },
        ],
    },
    experiments: {
        asyncWebAssembly: true, // WebAssembly の非同期ロードを有効化
    },
};