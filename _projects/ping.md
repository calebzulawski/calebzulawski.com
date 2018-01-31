---
title: Ping
description: An Arduino library for ultrasonic rangefinders
permalink: /projects/ping/
layout: default
---

{% include hc-sr04.html %}

**Ping** is library for interfacing Arduino microcontrollers with HC-SR04-style ultrasonic rangefinders.

This is one of the first projects I ever brought to completion. In early 2009, I read an article about a relatively new microcontroller, the Arduino. Something caught my eye about it---I don't remember what---but after I got my hands on one I never used my BASIC Stamp 2 again.

I had a few ultrasonic rangefinder sensors that I wanted to use, but no library existed at that point. I wrote a simple library and posted it on the Arduino Playground. To my surprise, within a year I had already received questions and suggestions.

The library was very simple and lacked some vital features, such as the use of interrupts, but it was the best I could do with my limited knowledge of C++ and AVR when I was only 16\. In fact, it served as the only ultrasonic sensor library available for Arduino for over two years until mid-2012.

The library is available [here](//playground.arduino.cc/Code/Ping) on the Arduino Playground.
