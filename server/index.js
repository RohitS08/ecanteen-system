// Load environment variables from .env file
require('dotenv').config();
const pathModule  = require('path');

const express = require('express');
const app = express();
const cors = require('cors');

const apiRoutes = require('./api'); // API routes

const connectDB = require('./utils/db'); // MongoDB connection function
connectDB(); // Connect to MongoDB

// Middleware to parse incoming JSON and enable CORS
app.use(express.json());
// const allowedOrigins = [
//   'http://localhost:5173',
//   'https://ecanteen-system.vercel.app',
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true,
//   })
// );
// console.log(pathModule .join(__dirname, './dist/index.html'))
console.log(typeof pathModule , pathModule .join)
app.use(express.static(pathModule .join(__dirname, './dist')));

app.use('/api', apiRoutes); // Use API routes

app.get('/*\w', (req, res) => {
  res.sendFile(pathModule .resolve(__dirname, './dist/index.html'));
});


// Start server on port 3001
app.listen(3001, () => {
  console.log('Server up and running...');
});
