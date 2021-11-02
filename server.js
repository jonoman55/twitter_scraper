const express = require('express');
const app = express();
require('dotenv').config();
const tweets = require('./user_tweets');

tweets();

const PORT = 5000;
app.listen(PORT, () =>
    console.log(`Server is now running on port ${PORT}`)
);