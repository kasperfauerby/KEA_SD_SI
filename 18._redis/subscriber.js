// Import the Redis package
import redis from "redis";

// Create a Redis client
const subscriber = redis.createClient();

// Handle connection event
subscriber.on('connect', function () {
  console.log('Connected to Redis (Subscriber)');
});

// Handle error event
subscriber.on('error', function (error) {
  console.error('Redis error:', error);
});

// Subscribe to the channel
subscriber.subscribe('channel1');

// Handle message event
subscriber.on('message', function (channel, message) {
  console.log('Received from', channel + ':', message);
});
