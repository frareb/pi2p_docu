---
id: docClim03
title: Forwarding data to the server
---

We'll need a device to transfer data from the sensors (LoRa radio) to the server; this device is called a gateway, and usually made using a Raspberry Pi and various modules.

## 1. The Raspberry Pi gateway

### 1.1. How to make the gateway?

The gateway is composed of at least a Raspberry Pi board, a RFM95 radio module for receiving sensors data and a PCF8523 real-time clock, that will keep track of the date even when the network or the Raspberry are disconnected.

As a main gateway board, you can use either of these Raspberry Pi :

- Raspberry Pi 3A+
- Raspberry Pi 3B+
- Raspberry Pi Zero W

Connect the to modules to the board according to the following diagram:

![](/pi2p_docu/img/Raspberry_Pi_RFM95_RTC.png)

### 1.2. How to make it work?

Once your gateway is assembled, you'll need to run a program that will send data to the server; this procedure follows three simple steps:

- asking for a gateway key (or rolling your own server);
- copying the example code;
- adding your encryption key to the gateway and running the code!

If you went to this section, you should already have visited the previous page about the sensors; if not, please read at least section 3 of the previous page; therefore, you're supposed to have downloaded the entire [`Task03` directory](https://github.com/frareb/pi2p/tree/master/Task03) of the main Github repository.

First, please contact [François Rebaudo](mailto:contact) to get a gateway key that will allow you to post data to the PI2P project server.

Once you have the key, you can simply go to the `sit_final` repository; the file there are required for encryption between the sensor and the gateway; you'll need to compile and install them with the following commands:

```bash
sudo python3 setup.py build
sudo python3 setup.py install
pip3 install adafruit-circuitpython-rfm9x
```

Nothing should go wrong, and you can now go to the `gateway` directory, and edit the file `forward.py`, to match the following:

- edit the `BASE_URL` to match the server you're using (https://pi2p.ird.fr/sensors);
- the `GW_KEY` is the gateway key that was given to you by the server owner;
- the server owner should also give you the ids of the sensors he configured for you, and you should match these ids in the `SENSOR_MAP` object; by default, `"T"` is temperature from the DS18B20, `"H"` is humidity from DHT11/22 and `"U"` is temperature from the DHT11/22.

Everything should be fine, so you can now execute `python3 forward.py`, and power a remote sensor to test your gateway.

### 1.2. Additional sensors

#### 1.2.1. BME280/BME680

#### 1.2.2. SI1145

#### 1.2.3. PiCam NoIR

## 2. Alternatives
