#[unsafe(no_mangle)]
pub unsafe extern "C" fn add_i32(a: i32, b: i32) -> i32 {
    a + b
}

#[unsafe(no_mangle)]
pub unsafe extern "C" fn multiply_i32(a: i32, b: i32) -> i32 {
    a * b
}

// テスト用の関数
pub fn add_u64(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add_u64(2, 2);
        assert_eq!(result, 4);
    }
}
