# Drawing Tool

## Overview
This project is a drawing tool implemented in Assembly language. It provides a simple interface for creating and manipulating graphics on the screen. The tool is designed to be lightweight and efficient, leveraging the low-level capabilities of Assembly for performance.

## Project Structure
- **src/**: Contains the source code for the drawing tool.
  - **main.asm**: Entry point of the assembly program, managing initialization and the main loop.
  - **renderer.asm**: Implements drawing functionalities, including functions and procedures for rendering shapes on the screen.
  - **utils.asm**: Provides utility functions for color conversion, coordinate calculations, and other helper functionalities.

- **assets/**: Contains resources used by the drawing tool.
  - **palette.txt**: Defines the color palette used in the drawing tool.

- **build/**: Contains files related to the build process.
  - **Makefile**: Manages the build process, defining rules for compiling and linking the assembly files.
  - **linker.ld**: Linker script that sets up memory layout and sections for the assembly program.

## Build Instructions
To build the project, navigate to the `build` directory and run the following command:

```
make
```

This will compile the assembly files and link them according to the specifications in the `linker.ld` file.

## Usage
After building the project, you can run the drawing tool. The tool will initialize and present a simple interface for drawing. Use the defined color palette in `assets/palette.txt` to select colors for drawing.

## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests to improve the drawing tool.