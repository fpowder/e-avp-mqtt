import * as mqtt from 'mqtt';
import _ from 'lodash';
// import hirestime from 'hirestime';
import * as googleProtos from 'google-proto-files'; 
import { entity, version, avpVehicleEngineSensors } from './protoBuf.js';
 
// const getElapsed = hirestime();

/**
 * dummy data
 */
const versionData = {
    major: 1,
    minor: 0,
    patch: 0
};

const softVerData = {
    major: 1,
    minor: 1,
    patch: 1
};

const hardVerData = {
    major: 2,
    minor: 2,
    patch: 2
};

const entityData = {
    primaryId: 'id 1',
    secondaryId: 'id 2',
    type: 'entity type',
    softwareVersion: softVerData,
    hardwareVersion: hardVerData
};

// test dummy data for google timestamp
const engineSensorData1 = {
    tps: Math.random() * 99.603 + 0.3906,
    speed: Math.round(Math.random() * 255),
    gear: _.sample([0, 4, 5, 6, 7, 8])
};
const engineSensorData2 = {
    tps: Math.random() * 99.603 + 0.3906,
    speed: Math.round(Math.random() * 255),
    gear: _.sample([0, 4, 5, 6, 7, 8])
};
const engineSensorData3 = {
    tps: Math.random() * 99.603 + 0.3906,
    speed: Math.round(Math.random() * 255),
    gear: _.sample([0, 4, 5, 6, 7, 8])
};

// console.log('getElapsed.seconds(): ', getElapsed.seconds());

const timestamp = {
    seconds: Math.floor(new Date().getTime() / 1000),
    nanos: Math.floor(new Date().getTime() % 1000 * 1000000)
}

// const sd1Msg = avpVehicleEngineSensor.create(engineSensorData1);
// const sd1MsgBuf = avpVehicleEngineSensor.encode(sd1Msg).finish();

// const sd2Msg = avpVehicleEngineSensor.create(engineSensorData2);
// const sd2MsgBuf = avpVehicleEngineSensor.encode(sd2Msg).finish();

// const sd3Msg = avpVehicleEngineSensor.create(engineSensorData3);
// const sd3MsgBuf = avpVehicleEngineSensor.encode(sd3Msg).finish();

const engineSensorDataChunk = {
    time: timestamp,
    data: [
        engineSensorData1 , engineSensorData2, engineSensorData3
    ]
}

console.log(engineSensorData3);
console.log('engineSensorDataChunk: ', engineSensorDataChunk);

const files = googleProtos.getProtoPath('protobuf');
console.log('files: ', files);

const versionValidate = version.verify(versionData);
const entityValidate = entity.verify(entityData);
const engineSensorsVerify = avpVehicleEngineSensors.verify(engineSensorDataChunk);

console.log('versionValidate: ' + versionValidate);
console.log('entityValidate: ' + entityValidate);
console.log('engineSensorsVerify: ', engineSensorsVerify);

const versionMessage = version.create(versionData);
const versionBuffer = version.encode(versionMessage).finish();
const decodedVersionMessage = version.decode(versionBuffer);

console.log(versionMessage);
console.log(versionBuffer);
console.log(decodedVersionMessage);

const entityMessage = entity.create(entityData);
const entityBuffer = entity.encode(entityMessage).finish();
const decodedEntityBuffer = entity.decode(entityBuffer);

console.log('entityMessage: ', entityMessage);
console.log('entityBuffer: ', entityBuffer);
console.log('decodedEntityBuffer: ', decodedEntityBuffer);

const engineSensorsMessage = avpVehicleEngineSensors.create(engineSensorDataChunk);
const engineSensorsBuffer = avpVehicleEngineSensors.encode(engineSensorsMessage).finish();
const decodedEngineSensorsMsg = avpVehicleEngineSensors.decode(engineSensorsBuffer);

console.log('engineSensorsMessage: ', engineSensorsMessage);
console.log('enginsSensorsBuffer: ', engineSensorsBuffer);
console.log('decodedEnginesensorsMsg: ', decodedEngineSensorsMsg);

const url = 'mqtt://192.168.1.78:1883';

export const pubClient = mqtt.connect(url, {
    connectTimeout: 10000,
    connectPeriod: 2000,
    clientId: 'alt-a-pub'
});

pubClient.publish('/version', versionBuffer);
pubClient.publish('/entity', entityBuffer);
pubClient.publish('/engineSensors', engineSensorsBuffer);
