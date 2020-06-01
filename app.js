var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname)); //Serves resources from public folder

const PORT = process.env.PORT || 5000;


var server = app.listen(PORT);