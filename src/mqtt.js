import * as mqtt from 'mqtt';

/**
 * LG u+ mqtt broker url
 */
// const url = 'mqtt://106.103.228.177:1883';

/**
 * HiveMQ for test server url
 */
const url = 'mqtt://192.168.1.78:1883';

export const client = mqtt.connect(url, {
    connectTimeout: 10000,
    connectPeriod: 2000,
    clientId: 'alt-a'
});