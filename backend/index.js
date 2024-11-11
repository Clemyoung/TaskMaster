// set up the dotenv
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");

// set up express
const app = express();

//set up the PORT
const PORT = process.env.PORT || 3000;

const connectDB = require("./config/dbConn");
connectDB()

//connect to database
mongoose.connection.once('open', () => {
    console.log("Connect to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});