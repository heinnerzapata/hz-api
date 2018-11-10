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

app.get('/api/test1', function (reqq, res) {
  res.status(200).send({
    success: 'true',
    message: 'test1 retrieved successfully',
    res1: _db2.default
  });
});

app.post('/api/test1', function (req, res) {
  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }

  var newElement = {
    id: _db2.default.length + 1,
    title: req.body.title,
    description: req.body.description
  };

  _db2.default.push(newElement);

  return res.status(201).send({
    success: 'true',
    message: 'new element added succesfully',
    newElement: newElement
  });
});
var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});