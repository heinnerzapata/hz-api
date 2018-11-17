'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./db/db');

var _db2 = _interopRequireDefault(_db);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(_express2.default.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('*', function (req, res) {
  res.send(200);
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});