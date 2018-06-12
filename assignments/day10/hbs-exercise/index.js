var express = require('express');
var exphbs  = require('express-handlebars');

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

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'hbs');

var hbs = require('hbs');

hbs.registerHelper('helper_name', function(req, res) {
  res.render('index', {
    data: data
  })
});
hbs.registerPartial('partial_name', 'partial value');

app.get('/', function (req, res) {
  res.render('index', {
    data: data
  })
});

app.listen(8080, function(){
  console.log("go to local:8080")
});
