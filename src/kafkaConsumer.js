import { kafka as avpKafka } from './kafka.js';

const consumer = avpKafka.consumer({groupId: 'alt-a-group'});

/* (async() => {
    await consumer.connect();
    await consumer.subscribe({ topic: '/auto/car/server/byte/rawdata', fromBeginning: true });

    await consumer.run({
        eachMessage: async({topic, partition, message}) => {
            console.log({
                topic: topic,
                partition: partition,
                value: message.value.toString()
            })
        }
    })
})(); */

(async() => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'traffic', fromBeginning: true });

    await consumer.run({
        eachMessage: async({topic, partition, message}) => {
            console.log({
                topic: topic,
                partition: partition,
                value: message.value.toString()
            })
        }
    })
})();