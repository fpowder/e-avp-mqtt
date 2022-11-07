import { Kafka, logLevel } from 'kafkajs';

const host = '106.103.228.177';
const port = '1883';

// export const kafka = new Kafka({
//     logLevel: logLevel.INFO,
//     clientId: 'alt-a',
//     brokers: [`${host}:${port}`]
// });

export const kafka = new Kafka({
    logLevel: logLevel.INFO,
    clientId: 'alt-a',
    brokers: ['192.168.1.4:9092']
});