---
title: Projects
menu: "main"
---

Below is a list of various side projects I've worked on (or are currently working on):

[Rust Portable SIMD](https://github.com/rust-lang/stdsimd)
----------------------------------------------------------
I've been a member of the [Rust Portable SIMD Project Group](https://blog.rust-lang.org/inside-rust/2020/09/29/Portable-SIMD-PG.html) since September 2020.
Our charter is to create the `std::simd` module for the Rust programming language's standard library, providing a safe, easy, and portable abstraction for using [SIMD](https://en.wikipedia.org/wiki/SIMD).
We are currently in the process of stabilizing the project for inclusion in the nightly compiler.

[Multiversion](https://crates.io/crates/multiversion)
-----------------------------------------------------
CPUs provide a bunch of special instructions for improving performance of code.
Unfortunately, not all CPUs (even those of the same family) have the same instructions, and using the wrong instructions can cause your program to crash.
"Function multiversioning" is the technique of compiling the same function for different CPUs, and choosing the best one when you run the program.
My `multiversion` project provides this capability for Rust programs.

[Fourier](https://crates.io/crates/fourier)
-------------------------------------------
The Fourier transform is a fundamental tool for digital signal processing.
`Fourier` is my attempt at creating a small, simple, yet state-of-the-art Fourier transform implementation.
For some transform sizes it is competitive with the best implementations, but there is still room for improvement for powers of two.
`Fourier` is written in Rust but also supports C and C++.

[Symbol Slasher](https://github.com/calebzulawski/symbol-slasher)
-----------------------------------------------------------------
Symbol Slasher is a fun experiment in obfuscation.
Dynamically-linked libraries must expose a [symbol table](https://en.wikipedia.org/wiki/Symbol_table) for other libraries and executables to interface with.
These symbols represent things like functions and variables, and their names are based on the names of those functions and variables, which could potentially expose the functionality of your libraries.
Symbol Slasher takes a collection of libraries and binaries and renames these symbols to hide their meaning.
