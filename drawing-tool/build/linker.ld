OUTPUT:

MEMORY
{
    RAM (rwx) : ORIGIN = 0x00000000, LENGTH = 64K
    ROM (rx)  : ORIGIN = 0x01000000, LENGTH = 64K
}

SECTIONS
{
    .text : {
        *(.text)
    } > ROM

    .data : {
        *(.data)
    } > RAM

    .bss : {
        *(.bss)
    } > RAM
}