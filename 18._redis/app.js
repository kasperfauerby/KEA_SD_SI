import redis from "redis";

const client = redis.createClient();

client.on("error", (error) => {
    console.error("Error:", error);
});

client.on("connect", () => console.log("Connected to Redis..."));

await client.connect();

client.set("myKey", "some value");
 const value = await client.get("myKey");
    console.log(value);

client.set("myKey", "some new value");
    
    console.log(await client.get("myKey"));