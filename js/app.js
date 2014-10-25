var express = require('express');
var mongoose = require('mongoose');



// CONNECTION
mongoose.connect('mongodb://localhost/extinctmammals');
var db = mongoose.connection;

var app = express();

// connect API
var api = require('./api.js');

app.get('/mammals/:type?', api.get);

app.post('/mammals', api.post);


app.listen(3000);

module.exports = app;