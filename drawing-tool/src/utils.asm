section .data
    ; Define constants for color conversion
    RGB_MAX equ 255

section .text
global convert_rgb_to_hex
global calculate_coordinates

; Function to convert RGB values to a hexadecimal color code
; Input: R, G, B in registers
; Output: Hex color code in EAX
convert_rgb_to_hex:
    ; Assume R is in EAX, G in EBX, B in ECX
    shl     EAX, 16      ; Shift R to the left by 16 bits
    shl     EBX, 8       ; Shift G to the left by 8 bits
    or      EAX, EBX     ; Combine R and G
    or      EAX, ECX     ; Combine with B
    ret

; Function to calculate the position of a point based on a given offset
; Input: base_x in EAX, base_y in EBX, offset_x in ECX, offset_y in EDX
; Output: final_x in EAX, final_y in EBX
calculate_coordinates:
    add     EAX, ECX      ; final_x = base_x + offset_x
    add     EBX, EDX      ; final_y = base_y + offset_y
    ret