const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:19092', 'localhost:29092', 'localhost:39092'],
});

const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();
  let messageCount = 0;

  setInterval(async () => {
    try {
      await producer.send({
        topic: 'test-topic',
        messages: [
          { value: `Hello KafkaJS user! Message number ${++messageCount}` },
        ],
      });

      console.log(`Sent message number ${messageCount}`);
    } catch (error) {
      console.error('Error sending message:', error);
      process.exit(1);
    }
  }, 1000);
};

runProducer().catch(error => {
  console.error('Error in producer:', error);
  process.exit(1);
});
