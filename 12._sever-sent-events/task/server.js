const express = require('express');
const app = express();

// SSE endpoint
app.get('/sse', (req, res) => {
  // Set headers for SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Send initial SSE event
  res.write('data: Connected\n\n');

  // Send periodic SSE events
  const interval = setInterval(() => {
    const message = `data: ${new Date().toISOString()}\n\n`;
    res.write(message);
  }, 1000);

  // Disconnect SSE connection on request close
  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});