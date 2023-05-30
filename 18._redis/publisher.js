// Import the Redis package
import redis from 'redis';

// Create a Redis client
const publisher = redis.createClient();

// Handle connection event
publisher.on('connect', function () {
  console.log('Connected to Redis (Publisher)');
});

// Handle error event
publisher.on('error', function (error) {
  console.error('Redis error:', error);
});

// Publish a message every second
const publishMessage = async () => {
  return new Promise((resolve, reject) => {
    const message = 'Hello from publisher at ' + new Date().toLocaleTimeString();
    publisher.publish('channel1', message, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log('Published:', message);
        resolve();
      }
    });
  });
};

// Define the number of messages to publish
const numMessages = 10;

// Publish the messages at regular intervals
const publishMessages = async () => {
  for (let i = 0; i < numMessages; i++) {
    try {
      await publishMessage();
    } catch (error) {
      console.error('Publishing error:', error);
    }
    await delay(1000);
  }

  publisher.quit();
  console.log('Publisher stopped');
};

// Utility function to introduce a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Start publishing messages
publishMessages();
