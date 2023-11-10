// this is the entry point for our express server

const express = require('express');
const app = express();
const path = require('path');

const addressRouter = require('./routers/addressRouter');

const PORT = 3010;

// parse incoming data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('dist'));

app.use('/address', addressRouter);

// handle unknown routes
app.use((req, res) => {
  res.status(404).send();
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'An error occurred',
    status: 500,
    message: {err: 'Watch out for those errors'}
  };

  const trueError = {
    ...defaultErr,
    ...err
  };

  console.log(trueError.log);
  res.status(trueError.status).send(trueError.message);
});

// app.listen(PORT, () => {
//   console.log('Listening on port: ' + PORT);
// });

module.exports = app;