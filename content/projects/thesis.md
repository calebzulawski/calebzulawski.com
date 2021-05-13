---
title: Master's Thesis
description: Learning an End-to-End Physical Layer with Computational Graphs
---

## Learning an End-to-End Physical Layer with Computational Graphs

[<span class="fas fa-file-pdf"></span> Read my entire thesis here](/files/thesis.pdf)

The goal of my thesis was to use machine learning, specifically neural networks, to learn a
high-performing physical layer for a wireless communication system.  I attempted to address a weakness in
current modulation schemes; modulation and forward error correction are considered two separate
problems.  It is possible, however difficult, to design a modulation scheme that nears the Shannon
limit, which is where neural networks come into play.

The results were promising.  In the end I was able to train a modem that performed slightly
outperformed convolutional codes.

### Design

The modem was designed as an autoencoder.  The inputs to the autoencoder are the symbol bits, and
the latent representation is the transmitted symbol.  Therefore, the encoder becomes the modulator
and the decoder becomes the demodulator.

![An autoencoder](/images/autoencoder.svg)

### Results

The autoencoder modem was able to compete with BPSK protected by one of the convolutional codes used
by the LTE standard.  The results are shown below.

> Note: since convolutional codes do not block-encode, blocks were constructed by taking sets of adjacent bits.

![Bit error rate](/images/ber.svg)

![Block error rate](/images/bler.svg)
