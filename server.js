var express = require('express');
const path = require("path");
var app = express();

app.get('/', function(req, res){
 res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(4000);
console.log("server 4000");