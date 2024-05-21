const express = require('express');
const connectDB = require('./utils/db');
const policyRoutes = require('./routes/policyRoutes');
const monitorCPU = require('./utils/cpuMonitor');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use policy routes
app.use('/api/policies', policyRoutes);

// Monitor CPU usage
monitorCPU();

module.exports = app;
