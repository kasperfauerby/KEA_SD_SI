const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (message, remote) => {
  console.log(`Received message: ${message.toString()} from ${remote.address}:${remote.port}`);
  const response = `You said: ${message.toString()}`;
  server.send(response, remote.port, remote.address, (error) => {
    if (error) {
      console.error('Error sending response:', error);
    } else {
      console.log('Response sent successfully');
    }
  });
});

const port = 3000;
server.bind(port, () => {
  console.log(`UDP server listening on port ${port}`);
});
