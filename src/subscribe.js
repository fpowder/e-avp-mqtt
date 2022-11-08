
import { entity, version } from './protoBuf.js';
import { client } from './mqtt.js';

client.on('connect', () => {
    console.log('connected!!');
});

/**
 * real subscribe path to LG u++ mqtt broker
 */
// client.subscribe('/auto/car/server/byte/rawdata', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('subscribe path : /auto/car/server/byte/rawdata');

// });

client.subscribe('/entity', (err) => {
    if(err) console.log(err);
});

client.subscribe('/version', (err) => {
    if(err) console.log(err);
});

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload);
    console.log(payload.length);

    if(topic === '/entity') {
        console.log('decodedEntityPayload : ', entity.decode(payload));
    } else if(topic === '/version') {
        console.log('decodedVersionPayload : ', version.decode(payload));
    }

});

