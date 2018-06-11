var express = require('express');
var http = require('http');
var app = express();


app.get('/', function(request, response){
	console.log('got request for "hello/world"');
	response.send(`this is Foo`);
	});

app.get('/myname/:id',function(request,response){
    response.send("My name " + request.params.id);
  });

app.get('/hello/apple|/hello/ale',function(request,response){
    response.send("apple or ale");
  });

app.get('/right/wh(o+)(a+)',function(request,response){
    response.send("I know right");
  });

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});
