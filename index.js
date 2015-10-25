var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty-usbserial1", {
  baudrate: 57600
}, false); // this is the openImmediately flag [default is true]

serialPort.open(function (error) {
  if ( error ) {
    console.log('failed to open: '+error);
  } else {
    console.log('open');
    serialPort.on('data', function(data) {
      console.log('data received: ' + data);
      if(data === "II"){
      	serialPort.write("AT#CC\r\n");
      }
      if(data === "IV"){
      	console.log("Paired");
      //	serialPort.write("AT#CC\r\n");
      }
    });
    serialPort.write("AT#CA\r\n", function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
  }
});
