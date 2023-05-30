const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// app.use(cors({
//     origin: 'https://example.com', // Specify the allowed origin
//     methods: ['GET', 'POST'], // Specify the allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Specify the allowed headers
//   }));

// Example route
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello, CORS!' };
  res.json(data);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
