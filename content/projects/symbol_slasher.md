---
title: Symbol Slasher
description: A proof-of-concept binary obfuscator
---

[<span class="fab fa-github"></span> View on GitHub](https://github.com/calebzulawski/symbol-slasher)

Symbol Slasher is a fun experiment in obfuscation.
Dynamically-linked libraries must expose a [symbol table](https://en.wikipedia.org/wiki/Symbol_table) for other libraries and executables to interface with.
These symbols represent things like functions and variables, and their names are based on the names of those functions and variables, which could potentially expose the functionality of your libraries.
Symbol Slasher takes a collection of libraries and binaries and renames these symbols to hide their meaning.
