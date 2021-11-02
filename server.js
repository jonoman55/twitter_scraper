const express = require('express');
const app = express();
require('dotenv').config();
const tweets = require('./user_tweets');

// TODO : Add more examples from: https://github.com/twitterdev/Twitter-API-v2-sample-code/blob/main/
// TODO : convert to function with usernames variable 
tweets();

const PORT = 5000;
app.listen(PORT, () =>
    console.log(`Server is now running on port ${PORT}`)
);