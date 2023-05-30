import redis

# Connect to Redis
r = redis.Redis()

# Publish a message
def publish_message():
    message = "Hello from publisher!"
    r.publish("channel1", message)
    print("Published:", message)

# Publish messages at regular intervals
for i in range(5):
    publish_message()

# Close the Redis connection
r.close()
