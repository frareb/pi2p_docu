---
id: docClim01
title: Climate monitoring
---

Environmental variables such as temperature or relative humidity experienced by insects differ from those measured by typical meteorological stations, mostly because insect pests live in their associated crop and because they can move in order to be (or not) exposed to solar radiations. This mismatch is important enough so that models describing insect development cannot rely solely on meteorological stations. It triggers the need for alternative measurements at the local scale (e.g., in the crop canopy) in order to better characterize the spatio-temporal heterogeneity of environmental variables.

This is why we used existing or new designs from the IoT world in order to capture data as close as possible to those experienced by insects. In the fields, we designed an Arduino-like microcontroller (PI2Puino) with sensors sending data to a Raspberry Pi gateway using P2P lora. The gateway is connected to Internet and transfer the data to our API. The API is described in the [PI2P website](https://pi2p.ird.fr), and the corresponding source code can be found in the project [GitHub repository](https://github.com/frareb/pi2p/tree/master/Task04) (The *README.md* file is in French).
