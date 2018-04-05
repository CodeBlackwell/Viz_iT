const router = require('koa-router')();
const stats = require('../../build/stats.json');
const Twitter = require('twitter-node-client').Twitter;
const config = require('./config');

const publicPath = stats.publicPath;

let STYLE_URL;
let SCRIPT_URL_APP = publicPath + [].concat(stats.assetsByChunkName.app)[0];
if (process.env.NODE_ENV === 'production') {
	STYLE_URL = (publicPath + [].concat(stats.assetsByChunkName.app)[1] + '?' + stats.hash);
	SCRIPT_URL_APP += '?' + stats.hash;
}

// SCRIPT_URL_APP = '/public/app.min.js';
// initiate twitter
const twitter = new Twitter(config.Twitter);


router.get('/client', async (ctx, next) => {
	await ctx.render('index', {
		version: stats.appVersion,
		commit: stats.appCommit,
		STYLE_URL: STYLE_URL,
		SCRIPT_URL: SCRIPT_URL_APP
	});
});



twitter.getUserTimeline({ screen_name: 'codeblackwell', count: '10'}, error, success);
router.get('/bar', (ctx) => {

    // ctx.body = 'hi';
});

// Twitter





function error (err, res, body) {
    console.log('ERROR [%s]', err);
}
function success(data) {
    console.log('Data [%s]', data);
}

module.exports = router;
