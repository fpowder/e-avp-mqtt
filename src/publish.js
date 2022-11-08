import { entity, version } from './protoBuf.js';
import * as mqtt from 'mqtt';

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

const versionValidate = version.verify(versionData);
const entityValidate = entity.verify(entityData);

console.log('versionValidate: ' + versionValidate);
console.log('entityValidate: ' + entityValidate);

const versionMessage = version.create(versionData);
console.log(versionMessage);

const versionBuffer = version.encode(versionMessage).finish();
console.log(versionBuffer);

const decodedVersionMessage = version.decode(versionBuffer);
console.log(decodedVersionMessage);

const entityMessage = entity.create(entityData);
console.log('entityMessage: ', entityMessage);

const entityBuffer = entity.encode(entityMessage).finish();
console.log('entityBuffer: ', entityBuffer);

const decodedEntityBuffer = entity.decode(entityBuffer);
console.log('decodedEntityBuffer: ', decodedEntityBuffer);


// const url = 'mqtt://192.168.1.78:1883';

// export const pubClient = mqtt.connect(url, {
//     connectTimeout: 10000,
//     connectPeriod: 2000,
//     clientId: 'alt-a-pub'
// });

// pubClient.publish('/version', versionBuffer);
// pubClient.publish('/entity', entityBuffer);






