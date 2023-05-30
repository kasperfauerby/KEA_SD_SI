const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received data: ${data.toString()}`);
    socket.write(`You said: ${data.toString()}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.write('Welcome to the TCP server!\n');
});

const port = 8000;
server.listen(port, () => {
  console.log(`TCP server listening on port ${port}`);
});