// this is the entry point for our express server

const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static('dist'));

app.get('/info', (req, res) => {
  res.status(200).json({what: 'got back'});
});

module.exports = app;