'use strict';
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../.env')});

let env;
if (['test', 'production', 'development', 'staging'].
	indexOf(process.env.NODE_ENV) === -1) {
  		env = 'development';
} else env = process.env.NODE_ENV;

let port = process.env.APP_PORT || 3000;
module.exports = {
	name: 'auth',
	myURL: process.env.MY_URL,
	env: env,
	port: port,
	database: {
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT,
		db: process.env.MONGO_DB
	},
	secret: process.env.SECRET,
	Twitter: {
		consumerKey: process.env.TWITTER_VIZIT_CONSUMER_KEY,
		consumerSecret: process.env.TWITTER_VIZIT_CONSUMER_SECRET
	},
};
