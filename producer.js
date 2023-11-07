// require in kafkaJS
const { Kafka } = require('kafkajs');
// get the environment variables
require('dotenv').config();


const run = async () => {
  // this function pushes logs into the kafka cluster
  // it writes one hundred messages to the cluster, waits one second,
  // and then writes another hundred

  // get access to the kafka cluster
  const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
  });


  // declare a variable counter
  let counter = 0;

  // get a producer from kafkajs
  const producer = kafka.producer();

  // connect the producer to the cluster
  await producer.connect();

  // declare a helper function
  const helper = async (iteration) => {
    // store the messages in an array
    const messageArray = [];

    // fill the array through a loop
    for (let i = 0; i < 100; i += 1) {
      messageArray.push({ value: `Message ${iteration}.${i}` });
    }

    // call the send method on the producer passing in the messageArray into the messages property
    await producer.send({
      topic: 'test',
      messages: messageArray,
    });


    // increment counter
    counter += 1;

    // wait one second, and call the helper function again
    setTimeout(() => { helper(counter); }, 1000);
  };

  helper(counter);
};

run().catch((err) => console.error(err));
