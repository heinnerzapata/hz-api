// import express from 'express';
// import db from './db/db';
// import bodyParser from 'body-parser';

var express = require('express');
var db = require('./db/db');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/static'));

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.post('/api/log',function(req,res){
  console.log(req.body.email);
  console.log(req.body.password);
  //It will find and locate index.html from View or Scripts
});

app.get('*', function(req, res){
  res.send(200);
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});