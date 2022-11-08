// const protobuf  = require('protobufjs');
// const path = require('path');

import protobuf from 'protobufjs';
import path from 'path'; 

const __dirname = path.resolve();


/* protobuf.load(path.join(__dirname, 'src', 'Avp.proto'), (err, root) => {
    if(err) {
        console.log(err);
        return;
    }

    // console.log(root);

    // Obtain a message type 
    const AvpVehicleParkingSensor = root.lookupType('keti.AvpVehicleParkingSensor');
    // console.log(AvpVehicleParkingSensor);

    const AvpVehicleParkingSensors = root.lookupType('keti.AvpVehicleParkingSensors');
    // console.log(AvpVehicleParkingSensors);
}); */


// load proto with sync
export const avpProto = protobuf.loadSync(path.join(__dirname, 'src', 'Avp.proto'));

export const version = avpProto.lookupType('keti.Version');
export const entity = avpProto.lookupType('keti.Entity');
export const envelope = avpProto.lookupType('keti.Envelope');
export const ids = avpProto.lookupType('keti.Ids');

export const avpVehicleParkingSensor = avpProto.lookupType('keti.AvpVehicleParkingSensor');
export const avpVehicleParkginSensor = avpProto.lookupType('keti.AvpVehicleParkingSensors');

export const avpVehicleSteeringSensor = avpProto.lookupType('keti.AvpVehicleSteeringSensor');
export const avpVehicleSteeringSensors = avpProto.lookupType('keti.AvpVehicleSteeringSensors');

export const avpVehicleEngineSensor = avpProto.lookupType('keti.AvpVehicleEngineSensor');
export const avpVehicleEngineSensors = avpProto.lookupType('keti.AvpVehicleEngineSensors');

export const avpVehicleStabilitySensor = avpProto.lookupType('keti.AvpVehicleStabilitySensor');
export const avpVehicleStabilitySensors = avpProto.lookupType('keti.AvpVehicleStabilitySensors');

export const avpVehicleDoorSensor = avpProto.lookupType('keti.AvpVehicleDoorSensor');
export const avpVehicleDoorSensors = avpProto.lookupType('keti.AvpVehicleDoorSensors');

export const avpDataMessage = avpProto.lookupType('keti.AvpDataMessage');
export const avpControlMessage = avpProto.lookupType('keti.AvpControlMessage');

export const avpMessage = avpProto.lookupType('keti.AvpMessage');

console.log('version: ' + !!version);
console.log('entity: ' + !!entity);
console.log('envelope: ' + !!envelope);
console.log('ids: ' + !!ids);

console.log('avpVehicleParkingSensor: ' + !!avpVehicleParkingSensor);
console.log('avpVehicleParkingSensors: ' + !!avpVehicleParkingSensor);

console.log('avpVehicleSteeringSensor:' + !!avpVehicleSteeringSensor);
console.log('avpVehicleSteeringSensors:' + !!avpVehicleSteeringSensor);

console.log('avpVehicleEngineSensor: ' + !!avpVehicleEngineSensor);
console.log('avpVehicleEngineSensors: ' + !!avpVehicleEngineSensor);

console.log('avpVehicleStabilitySensor: ' + !!avpVehicleStabilitySensor);
console.log('avpVehicleStabilitySensors: ' + !!avpVehicleStabilitySensor);

console.log('avpVehicleDoorSensor: ' + !!avpVehicleDoorSensor);
console.log('avpVehicleDoorSensors: ' + !!avpVehicleDoorSensor);

console.log('avpDataMessage: ' + !!avpDataMessage);
console.log('avpControlMessage: ' + !!avpControlMessage);

console.log('avpMessage: '+ !!avpMessage);


// const avpVehicleParkingSensor = avpProto.lookupType('keti.AvpVehicleParkingSensor');
// console.log(avpVehicleParkingSensor);

// const avpVehicleParkingSensors = avpProto.lookupType('keti.AvpVehicleParkingSensors');
// console.log(avpVehicleParkingSensors);