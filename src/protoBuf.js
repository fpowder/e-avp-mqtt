// const protobuf  = require('protobufjs');
// const path = require('path');

import protobuf from 'protobufjs';
import path from 'path'; 

const __dirname = path.resolve();

protobuf.load(path.join(__dirname, 'src', 'Avp.proto'), (err, root) => {
    if(err) console.log(err);

    // console.log(root);

    // Obtain a message type 
    const AvpVehicleParkingSensor = root.lookupType('keti.AvpVehicleParkingSensor');
    console.log(AvpVehicleParkingSensor);

    const AvpVehicleParkingSensors = root.lookupType('keti.AvpVehicleParkingSensors');
    console.log(AvpVehicleParkingSensors);
});


