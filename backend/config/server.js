require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsoptions');
const connectDB = require('./config/connectDB');
const allowedOrigins = require('./config/allowedorigins');

// Initialize the app
const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
