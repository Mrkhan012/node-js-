const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiConfigRoutes = require('./routes/apiConfig');
const flowRoutes = require('./routes/flow');

dotenv.config();
connectDB();

// Root route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the API server');
});

// API routes
app.use('/api/api-configs', apiConfigRoutes);
app.use('/api/flows', flowRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
