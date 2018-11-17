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

app.get('/', function (req, res) {
  res.status(200).send({
    success: 'true',
    message: 'welcome to api',
    res1: _db2.default
  });
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});