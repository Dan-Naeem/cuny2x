// create a TWITTER obj and connects it to twitter
var Twit = require('twit');

//pull twitter accout info, connect twit object to the API
var config = require('./config.js');
var T = new Twit(config);

// A user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

// In this callback we can see the name and screen name
function followed(event) {
  var name = event.source.name;
  var screenName = event.source.screen_name;
  var replyText =  "O.o thanks for following me " + name;

  // Post that tweet
  T.post('statuses/update', { status: replyText,}, tweeted);

  // Make sure it worked!
  function tweeted(err, reply) {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Tweeted: ' + reply.text);
    }
  }
  console.log('I was followed by: ' + name + ' @' + screenName);
}

// Now looking for tweet events
// See: https://dev.twitter.com/streaming/userstreams
stream.on('tweet', tweetEvent);

// Here a tweet event is triggered!
function tweetEvent(tweet) {

  // Who is this in reply to?
  var reply_to = tweet.in_reply_to_screen_name;
  // Who sent the tweet?
  var name = tweet.user.screen_name;
  // What is the text?
  var txt = tweet.text;
  // If we want the conversation thread
  var id = tweet.id_str;

  // Ok, if this was in reply to me
  // Tweets by me show up here too
  if (reply_to === 'InatorBot') {

    // Get rid of the @ mention
    txt = txt.replace(/@InatorBot/g,'');

    //reply back to the sender
    var replyText = '@'+name + ' thx for doing the twit at me XD';

    // Post that tweet
    T.post('statuses/update', { status: replyText, in_reply_to_status_id: id}, tweeted);

    // Make sure it worked!
    function tweeted(err, reply) {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Tweeted: ' + reply.text);
      }
    }
  }
}
