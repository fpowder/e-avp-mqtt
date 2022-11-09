
import { entity, version, avpVehicleEngineSensors } from './protoBuf.js';
import { client } from './mqtt.js';
import { logger } from './logger.js';

client.on('connect', () => {
    logger.info('connected to mqtt broker!!');
});

client.subscribe('/entity', (err) => {
    if(err) logger.info(err);
});

client.subscribe('/version', (err) => {
    if(err) logger.info(err);
});

client.subscribe('/engineSensors', (err) => {
    if(err) logger.info(err);
});

client.on('message', (topic, payload) => {
    logger.info('Received Message:', topic, payload);
    logger.info(payload.length);

    if(topic === '/entity') {
        logger.info('decodedEntityPayload : ', entity.decode(payload));
    } else if(topic === '/version') {
        logger.info('decodedVersionPayload : ', version.decode(payload));
    } else if(topic === '/engineSensors') {
        logger.info('decodedEngineSensors : ', avpVehicleEngineSensors.decode(payload));
    }

});

/**
* real subscribe path to LG u++ mqtt broker
*/
// client.subscribe('/auto/car/server/byte/rawdata', (err) => {
//     if(err) {
//         logger.info(err);
//     }
//     logger.info('subscribe path : /auto/car/server/byte/rawdata');

// });