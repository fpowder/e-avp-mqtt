const mqtt = require('mqtt');

const options = {
    host: 'localhost',
    port: 1883
}

const client = mqtt.connect(options);

client.on('connect', () => {

});
