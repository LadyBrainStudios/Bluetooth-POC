Bluetooth Connnection Node POC
==============================

Parts:
Beaglebone black
Fadecandy
Neopixel light strips
BLK-MD-SPK-B (bluetooth module)

Bluetooth command set:
http://www.elecfreaks.com/store/download/product/Bluetooth/BLK-MD-SPK-B/BLK-MD-SPK-B_AT_Command_set.pdf

AT#CA //discoverable //II
AT#CM //toggle mic //OK
AT#CC //connect to paired handset //IV
AT#VD //volume down
AT#VU //volume up

linux setup:
apt-get install build-essential libbluetooth-dev