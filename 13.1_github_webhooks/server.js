const express = require('express');
const crypto = require('crypto');

const app = express();
const secret = 'your-webhook-secret'; // Replace with your own secret

// Define a route to handle the GitHub webhook events
app.post('/webhook', (req, res) => {
  const event = req.headers['x-github-event'];
  const signature = req.headers['x-hub-signature-256'];
  const payload = JSON.stringify(req.body);

  const isValidSignature = verifySignature(payload, secret, signature);

  if (!isValidSignature) {
    console.error('Invalid signature');
    return res.status(403).json({ error: 'Invalid signature' });
  }

  // Handle different GitHub webhook events
  if (event === 'push') {
    const branch = req.body.ref.split('/').pop();
    console.log(`New commit pushed to branch: ${branch}`);
    // Perform necessary actions for the push event
  } else if (event === 'pull_request') {
    const prAction = req.body.action;
    console.log(`Pull request ${prAction}`);
    // Perform necessary actions for the pull request event
  }

  res.sendStatus(200);
});

// Helper function to verify the signature
function verifySignature(payload, secret, signature) {
  const hmac = crypto.createHmac('sha256', secret);
  const expectedSignature = `sha256=${hmac.update(payload).digest('hex')}`;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Webhook server running on port ${port}`);
});
