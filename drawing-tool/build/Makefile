CC = nasm
LD = ld
CFLAGS = -f elf64
LDFLAGS = -o drawing-tool

SRC = ../src/main.asm ../src/renderer.asm ../src/utils.asm
OBJ = $(SRC:.asm=.o)

all: $(OBJ)
	$(LD) $(LDFLAGS) $(OBJ)

%.o: %.asm
	$(CC) $(CFLAGS) $< -o $@

clean:
	rm -f $(OBJ) drawing-tool