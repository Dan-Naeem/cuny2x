var Twit = require('twit');

var config = require('./config.js');
var T = new Twit(config);

T.get('search/tweets', { q: 'E3', count: 10 }, gotData);

function gotData(err, data) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
