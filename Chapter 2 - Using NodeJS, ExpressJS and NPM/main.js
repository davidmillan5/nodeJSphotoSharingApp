'use strict';

const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {});

app.get('/', (req, res) => {
  res.json({
    Hosting: 'Kinsta',
  });
});

console.log(`App Listening On Port: ${port}`);
