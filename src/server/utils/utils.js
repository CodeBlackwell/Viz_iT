module.exports = {
    // mostCommonHashTag(tweets) {
    //     return tweets.map(tweet => {
    //         return tweet.entities.hashtags;
    //     }).reduce((acc, next) => {
    //         if (!acc[next.text]) {
    //             acc[next.text] = 1;
    //         } else {
    //             acc[next.text] += 1;
    //         }
    //     }, {});
    // }

    mostCommonHashTag(tweets) {
        return tweets.map(tweet => {
            return tweet.entities.hashtags
        })
            .reduce((prev, next) => {
                // Don't process tweets without hashTags
                if (next.length === 0) {
                    return prev;
                }
                next.forEach(tweetHashTag => {
                    if(!prev[tweetHashTag.text.toLowerCase()]) {
                        prev[tweetHashTag.text.toLowerCase()] = 1;
                    } else {
                        prev[tweetHashTag.text.toLowerCase()] += 1;
                    }
                });
                return prev
            }, {})
    }
};
