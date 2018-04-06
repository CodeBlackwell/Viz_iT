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


    // returns { react: 10, redux: 5, someOtherHashTag: 15.....}

    mostCommonHashTag(tweets, top = 10) {
        const HashTagCount = tweets.map(tweet => {
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
            }, {});
        let count = [];
        for(let key in HashTagCount) {
            count.push({hashtag: key, frequency: HashTagCount[key]})
        }

        const length = count.length < top ? count.length : top;
        return count.sort((a, b) => {
            return b.frequency - a.frequency;
        }).slice(0, length);
    }
};
