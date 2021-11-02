// const TwitterLite = require('twitter-lite');
// const Twitter = require('twitter-v2');
// const TwitterApi = require('twitter-api-v2').default;

// const {
//     TWITTER_API_KEY,
//     TWITTER_API_KEY_SECRET,
//     TWITTER_API_TOKEN,
//     TWITTER_API_TOKEN_SECRET,
// } = process.env;

// function newClient(subdomain = 'api', version = '1.1', extension = true) {
//     return new TwitterLite({
//         subdomain,
//         version,
//         extension,
//         consumer_key: TWITTER_API_KEY,
//         consumer_secret: TWITTER_API_KEY_SECRET,
//         access_token_key: TWITTER_API_TOKEN,
//         access_token_secret: TWITTER_API_TOKEN_SECRET,
//     });
// };

// const client = newClient();

// async function verifyAccount() {
//     client
//         .get("account/verify_credentials")
//         .then(() => {
//             return true;
//         })
//         .catch(console.error);
//     return false;
// };

// async function usersLookup(usernames) {
//     const users = await client.post("users/lookup", {
//         screen_name: usernames
//     });
//     return users;
// };

// async function usersTweets(username) {
//     const users = await client.get("tweets", {
//         screen_name: username
//     });
//     return users;
// };

// async function usernameTimeline(username) {
//     const response = await client.get('statuses/user_timeline', {
//         screen_name: username,
//         count: 1,
//         exclude_replies: true,
//         include_rts: true,
//         trim_user: true,
//     });
//     return response;
// };

// async function main() {
//     const username = 'BinanceHelpDesk';
//     const usernames = 'BinanceHelpDesk,binance';
//     if (verifyAccount()) {
//         const getUsers = await usersLookup(usernames);
//         console.log(getUsers);
//         const getTimeline = await usernameTimeline(username);
//         console.log(getTimeline);
//     }
// };

// if (require.main === module) {
//     main().catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });
// };

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// };

// const twitterApi = new TwitterApi({
//     appKey: process.env.TWITTER_API_KEY,
//     appSecret: process.env.TWITTER_API_KEY_SECRET,
//     accessToken: process.env.TWITTER_API_TOKEN,
//     accessSecret: process.env.TWITTER_API_TOKEN_SECRET,
// });

// async function parseTweets() {
//     const tweets = await twitterApi.v2.userTimeline('877807935493033984',
//         { exclude: 'replies' }
//     );
//     for (const tweet of tweets) {
//         console.log(tweet);
//     }
//     // const stringify = JSON.stringify(tweets);
//     // return JSON.parse(stringify);
// };

// function parseTweet(tweet) {
//     return {
//         text: tweet.text,
//         id: tweet.id,
//     };
// };

// async function printIds() {
//     const tweets = await parseTweets();
//     for (const tweet in tweets) {
//         console.log(tweet);
//         const parsedTweet = parseTweet(tweet);
//         console.log(parsedTweet);
//     }
// };

// printIds();

// const twitter = new Twitter({
//     consumer_key: process.env.TWITTER_API_KEY,
//     consumer_secret: process.env.TWITTER_API_KEY_SECRET,
//     access_token_key: process.env.TWITTER_API_TOKEN,
//     access_token_secret: process.env.TWITTER_API_TOKEN_SECRET,
// });

// BinanceHelpDesk / 877807935493033984
//curl --location --request GET 'https://api.twitter.com/2/tweets/1275828087666679809?tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld'
// async function getTweets() {
//     // Tweet Lookup API Reference: https://bit.ly/2QF58Kw
//     const { data: tweets, errors } = await twitter.get('tweets', {
//         ids: '1435510150895341569,1455233234405576706',
//         tweet: {
//             fields: ['created_at', 'entities', 'public_metrics', 'author_id'],
//         },
//     });

//     if (errors) {
//         console.log('Errors:', errors);
//         return;
//     }

//     console.log(tweets);
// };

// getTweets();