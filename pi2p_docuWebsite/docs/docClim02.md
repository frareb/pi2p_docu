---
id: docClim02
title: Gathering on-site measurements
---

Two methods are proposed for gathering on-site measurements:

- using a specific card, the PI2Puino (Arduino-based), which is the most easy and recommended way;
- using a simple Arduino board, like an Arduino Nano, or Arduino Pro Mini, mostly for prototyping or very small batches of sensors.

## 1. The PI2Puino

The PI2Puino is a very integrated board, that includes the LoRa module (with an embedded antenna), an Arduino-compatible microcontroller and a battery holder; it was designed specifically for the PI2P project, and is provided with a complete casing system.

### 1.1. How to get it?

PI2P is a research project, so you'll likely need to make your own boards. Anyway, if there's a local research laboratory near you that's already part of the network, you might contact them to get a small batch of boards. If you need to make it yourself, *don't panic*, as the process is quite easy, and doesn't require expensives tools.

### 1.2. What tools do I need?

In order to make the board, you'll need a soldering iron, and... that's it! The board was designed so that every single component on it is easy to solder, so that you don't waste your time trying to solder the boards.

### 1.3. How to make the PCB?

You can take two paths here: either make the board in local facilities, but please make sure to meet the minimal requirements below. Otherwise, the recommended way is to send it to a professionnal PCB manufacturer of your choice. For either of theses choices, you'll need, at least, to be able to respect the following criterias:

- the board needs to have a solder mask; this is because they will be exposed to harsh meteorological conditions, and a solder mask protects the copper layers for oxidation;
- for the same reasons as above, please use tainted vias when making the board;
- the minimal requirements are: 2 layers board with 1oz copper, 0.6mm trace width, 0.3mm clearance, 0.8mm via size, 0.4mm via drill.

Once you've arranged all of these requirements with your PCB manufacturer, then you can download the Gerber files [here](example.org), and just send them; the board size is 97x47mm, so you may panelize it (1x2 or 2x4) to get a better price.

### 1.4. What components do I need?

The table list all the components you need, with manufacturer part number when useful, but you'll need to add the sensors you need.

| Marking | Description | Value | Package | Part N. |
| ------- | --------- | ------- | ------- | ------- |
| L1 | Antenna impedance matching inductance | Wire | None | None |
| C1 | Antenna impedance matching capacitor | None | None | None |
| C2, C3 | Decoupling capacitors | 100 nF | 1206 (3216 Metric) | Mainstream |
| R1, R2, R3, R4 | Pull-up/down resistors | 1k - 10k | 1206 (3216 Metric) | Mainstream |
| U1 | 868 MHz LoRa module | RFM95 | ESP-like | HopeRF RFM95W-868S2 |
| U2 | Main microcontroller | AtMega328 | DIP-28 | Microchip ATMega328P-PU |

For the impedance matching components, the value will depend on your PCB manufacturer; for a prototype, you can have a short instead of the inductance, and an open-circuit for the capacitor.

For the Atmega, some manufacturers provide them with the Arduino bootloader; you can choose them if you want to go quick, or do not have an Arduino to program the board. If it has no bootloader, then you need to populate header J2 to flash it yourself; otherwise, simply fill the holes with solder to prevent oxidation.

For the connectors, you need to populate at least J4 with a standard female pin header connector (2.54 mm); this connector is used to program the board using a FT232 module, that you'll need to buy somewhere. The two other headers, J1 and J3 are used to plug the sensors; it might be convenient, for a prototype board, to have pin headers on them; otherwise, solder the sensors' pins directly on the board.

## 2. Alternatives

If you're looking at experimenting with the project before joining the network, then you might be interested in making a single prototype board with no overhead for development purposes. In this case, you can use any Arduino to make a demo board.

### 2.1. Arduino pro mini 3.3V

### 2.2. Arduino Nano
