
import { entity, version, avpVehicleEngineSensors, avpMessage } from './protoBuf.js';
import { client } from './mqtt.js';
import { logger } from './logger.js';

client.on('connect', () => {
    logger.info('connected to mqtt broker!!');
});

/**
 * test subscribe for local test 
 * hivemq broker running on 192.168.1.78
 */
/* client.subscribe('/entity', (err) => {
    if(err) logger.error(err);
});

client.subscribe('/version', (err) => {
    if(err) logger.error(err);
});

client.subscribe('/engineSensors', (err) => {
    if(err) logger.error(err);
});

client.on('message', (topic, payload) => {
    logger.info('message topic', topic);

    if(topic === '/entity') {
        logger.info({
            dataType: 'decodedEntityPayload',
            decoded: entity.decode(payload)
        });
    } else if(topic === '/version') {
        logger.info({
            dataType: 'decodedVersionPayload',
            decoded: version.decode(payload)
        });
    } else if(topic === '/engineSensors') {
        logger.info({
            dataType: 'decodedEngineSensors',
            decoded: avpVehicleEngineSensors.decode(payload)
        });
    }
}); */

/**
* real subscribe path to LG u++ mqtt broker
*/
client.subscribe('/auto/car/server/byte/rawdata', (err) => {
    if(err) {
        logger.error(err);
    }
    logger.info('subscribe path : /auto/car/server/byte/rawdata');
});

client.on('message', (topic, payload) => {
    logger.info('message topic', topic);

   if(topic === '/auto/car/server/byte/rawdata') {
        logger.info({
            dataType: 'avpMessage',
            decoded: avpMessage.decode(payload)
        });
    }
});