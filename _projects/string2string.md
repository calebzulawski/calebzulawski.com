---
title: String2String
description: A $40 digital blackboard
permalink: /projects/string2string
layout: default
---

<style>
.yt-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
.yt-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

String2String
===

String2String is an extremely inexpensive method of digitizing writing on a blackboard. It was originally devised as a
[HackCooper 2015](http://pioneer.cooper.edu/2015/02/21/hack-cooper-2015/) hackathon project with two of my classmates,
where it was built for under $40.  We received several awards, tech press coverage, and even presented to the U.S. Secretary of State
and Chinese Vice Premier in Beijing.

Technical details
---

The secret of String2String's low cost is its simple hardware.  Handwriting digitization is accomplished by using string to map the position of
the chalk and ultrasonic rangefinder sensors to measure distance.

String is attached to the piece of chalk and allowed to move through two pulleys at the top corners of the blackboard.
Ultrasonic rangefinder sensors measure movements of weights at the ends of the string, allowing the distance between each pulley and the chalk to be computed.
A Savitzky–Golay filter is applied to the sampled distances to minimize the effect of sensor noise.
The chalk position is then calculated from the denoised distances and sent to a web server which accumulates the results for visualization.
The visualization is accomplished using cardinal splines to interpolate between samples.

More details, as well as all of the original code, is [available on GitHub](https://github.com/string2string/string2string).

Video from HackCooper 2015
---
<div class="yt-container">
<iframe src="https://www.youtube.com/embed/y1aw0IiamFM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="yt-video"></iframe>
</div>

Awards and recognition
---

**[U.S.-China High-Level Consultation on People-to-People Exchange](http://www.china-embassy.org/eng/zgyw/t1371449.htm)** <br>
Beijing, China - June 2016 <br>
Presented to U.S. Secretary of State John Kerry and Chinese Vice Premier Liu Yandong at the National Museum of China

**[China-U.S. Young Maker Competition](https://chinausyoungmakercompetition.hackster.io/)** <br>
Chengdu, China - August 2015 <br>
Finalist

**[Dream It. Code It. Win It.](http://www.dreamitcodeitwinit.org/)** <br>
New York - April 2015 <br>
Ingenuity Prize

**[HackCooper](http://hackcooper.org/)** <br>
New York - February 2015 <br>
Most Technical Hack

Press
---

**Today Focus** - [An interview with my team in Chengdu, China](http://www.todayfocus.cn/p/4149.html)

**Popular Science** - [Build Your Own Interactive Chalkboard On The Cheap](https://www.popsci.com/build-your-own-interactive-whiteboard-under-40)

**Hackaday** - [Blackboard Digitization for Under $40](https://hackaday.com/2015/02/17/blackboard-digitization-for-under-40/)

**Codeduino** - [String2String – Digitalised Blackboard](https://codeduino.com/projects/games/string2string-digitalised-blackboard/)

**Gadgetify** - [String2String: Digitally Encoding Writing on a Chalkboard](http://www.gadgetify.com/string2string/)
