var express = require('express');
var app = express();
var fs = require('fs');

app.get('/sendText', function(req, res) {
  res.end();
  fs.appendFile('message.txt', req.query.text, function (err) {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  }); 
});

app.listen(8080);
