export const width: i32 = 800;
export const height: i32 = 600;

// フレームバッファ (RGBA)
export const framebuffer = new Uint8Array(width * height * 4);

// 指定した位置にピクセルを設定
export function set_pixel(x: i32, y: i32, r: u8, g: u8, b: u8, a: u8): void {
    if (x < 0 || x >= width || y < 0 || y >= height) return;

    const index = (y * width + x) * 4;
    framebuffer[index] = r;
    framebuffer[index + 1] = g;
    framebuffer[index + 2] = b;
    framebuffer[index + 3] = a;
}