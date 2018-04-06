const router = require('koa-router')();
const stats = require('../../build/stats.json');
const config = require('./config');
const Twitter = require('twitter');

const mostCommonHashTag = require('./utils/utils').mostCommonHashTag;

const publicPath = stats.publicPath;

let STYLE_URL;
let SCRIPT_URL_APP = publicPath + [].concat(stats.assetsByChunkName.app)[0];
if (process.env.NODE_ENV === 'production') {
    STYLE_URL = (publicPath + [].concat(stats.assetsByChunkName.app)[1] + '?' + stats.hash);
    SCRIPT_URL_APP += '?' + stats.hash;
}

// initiate twitter
const client = new Twitter(config.Twitter);


router.get('/client', async (ctx, next) => {
    await ctx.render('index', {
        version: stats.appVersion,
        commit: stats.appCommit,
        STYLE_URL: STYLE_URL,
        SCRIPT_URL: SCRIPT_URL_APP
    });
});


router.get(
    '/tweets/hashtags/:screen_name/:count/:top',
    (ctx, next) => {
        return client.get('statuses/user_timeline', ctx.params)
            .then(tweets => {
                const top = ctx.params.top;
                ctx.body = mostCommonHashTag(tweets, top);
                next();
            })
            .catch(err => console.log('Error: ', err));
    }
);

module.exports = router;
