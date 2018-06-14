var Twit = require('twit');

var config = require('./config.js');
var T = new Twit(config);

// Once every hour
setInterval(tweeter, 60*60*1000);
// A function that tweets a random number!
function tweeter() {
  var num = Math.floor(Math.random()*100);
  var tweet = 'Here\'s a random number between 0 and 100: ' + num;

  T.post('statuses/update', { status: tweet }, tweeted);
}
// A user stream
var stream = T.stream('user');

// When someone follows the user
stream.on('follow', followed);

// In this callback we can see the name and screen name
function followed(event) {
  var name = event.source.name;
  var screenName = event.source.screen_name;
  console.log('I was followed by: ' + name + ' ' + screenName);
}
