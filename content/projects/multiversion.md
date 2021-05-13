---
title: Multiversion
description: Function multiversioning for Rust
---

[<span class="fab fa-rust"></span> View on crates.io](https://crates.io/crates/multiversion)

[<span class="fab fa-github"></span> View on GitHub](https://github.com/calebzulawski/multiversion)

CPUs provide a bunch of special instructions for improving performance of code.
Unfortunately, not all CPUs (even those of the same family) have the same instructions, and using the wrong instructions can cause your program to crash.
"Function multiversioning" is the technique of compiling the same function for different CPUs, and choosing the best one when you run the program.
My `multiversion` project provides this capability for Rust programs.
