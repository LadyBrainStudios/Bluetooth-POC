var btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();

btSerial.on('found', function(address, name) {
    btSerial.findSerialPortChannel(address, function(channel) {
        btSerial.connect(address, channel, function() {
            console.log('connected');

            writeToBT("AX#CA");

            btSerial.on('data', function(buffer) {
                if(/^II$/.test(buffer)){
                	writeToBT("AX#CC");
                }
                if(/^IV$/.test(buffer)){
                	console.log("audioConnecte!");
                }
            });
        }, function () {
            console.log('cannot connect');
        });

        // close the connection when you're ready
        btSerial.close();
    }, function() {
        console.log('found nothing');
    });
});

btSerial.inquire();

function writeToBT(btCommand){
	btSerial.write(new Buffer(btCommand, 'utf-8'), function(err, bytesWritten) {            	
    if (err) console.log(err);
  });
}
