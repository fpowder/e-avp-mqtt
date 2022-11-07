import * as mqtt from 'mqtt';

const url = 'mqtt://106.103.228.177:1883';
// const url = 'mqtt://192.168.1.4:9092';

const client = mqtt.connect(url, {
    connectTimeout: 10000,
    connectPeriod: 2000,
    clientId: 'alt-a'
});

client.on('connect', () => {
    console.log('connected!!');

    // client.subscribe('/auto/car/server/byte/rawdata', (err) => {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log('subscribe path : /auto/car/server/byte/rawdata');

    // });
});

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString());
});