'use strict';

const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notfound.html');

const server = http.createServer((req, res) => {
  if (req.url == '/about') {
    res.end(aboutPage);
  } else if (req.url == '/contact') {
    res.end(contactPage);
  } else if (req.url == '/') {
    res.end(homePage);
  } else {
    res.writeHead(404);
    res.end(notFoundPage);
  }
});

const host = 8080;

server.listen(host);

console.log(`Listening to Port: ${host}`);
