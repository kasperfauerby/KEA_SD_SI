const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = app.listen(3000, () => {
  console.log('WebSocket server running on port 3000');
});

const wss = new WebSocket.Server({ server });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection event
wss.on('connection', (ws) => {
  console.log('Client connected');

  // WebSocket message event
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Echo the received message back to the client
    ws.send(`You said: ${message}`);
  });

  // WebSocket close event
  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');
});
