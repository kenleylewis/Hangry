var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var user = require('./routes/user.js');
var recipe = require('./routes/recipe.js');
var auth = require('./routes/auth.js');

var app = express();

// load the env vars
require('dotenv').load();

// connect to MongoDB with mongoose
require('./config/database')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', user);
app.use('/auth', auth);
app.use('/recipe', recipe);

module.exports = app;
