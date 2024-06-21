// // pages/api/track.js
// export default function handler(req, res) {
//     const { number } = req.query;

//     // Simulate tracking details for demo purposes
//     const trackingData = {
//         "123456789": {
//             status: "In Transit",
//             location: "New York, NY",
//             expectedDelivery: "2023-06-25",
//         },
//         "987654321": {
//             status: "Delivered",
//             location: "Los Angeles, CA",
//             expectedDelivery: "2023-06-15",
//         },
//     };

//     const details = trackingData[number];

//     if (details) {
//         res.status(200).json(details);
//     } else {
//         res.status(404).json({ message: "Tracking number not found" });
//     }
// }


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Simulated database or storage for tracking information
let trackingData = {};

// Endpoint to track a package by tracking number
app.get('/api/track/:trackingNumber', (req, res) => {
  const { trackingNumber } = req.params;

  if (trackingData[trackingNumber]) {
    res.json(trackingData[trackingNumber]);
  } else {
    res.status(404).json({ error: 'Tracking number not found' });
  }
});

// Endpoint to update tracking information
app.put('/api/track/:trackingNumber', (req, res) => {
  const { trackingNumber } = req.params;
  const { status, location, estimatedDelivery } = req.body;

  if (!trackingData[trackingNumber]) {
    trackingData[trackingNumber] = {};
  }

  trackingData[trackingNumber] = {
    ...trackingData[trackingNumber],
    trackingNumber,
    status,
    location,
    estimatedDelivery,
    lastUpdated: new Date()
  };

  res.json(trackingData[trackingNumber]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
