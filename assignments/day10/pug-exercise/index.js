var express = require('express');
var http = require('http');
var app = express();

var data = {
    groceries: [{
      store: 'Acme',
      list: [
        'strawberries',
        'blueberries',
        'yogurt'
      ]
    },
    {
    store: 'Corner Market',
    list: [
        'baguette',
        'basil',
        'tomatoes'
    ]
  }]
};

app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.render('list', {
    a_title: "long string",
    data: data
  })
});
app.listen(8080, function(){
});
