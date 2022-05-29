// app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import cookieParser from 'cookie-parser';
import { setCookie } from './utilities/index.js';
import { indexView } from './views/index.js';
import { opendirSync } from 'fs';
import { getCookie } from './utilities/index.js';

var app = express();

app.use(cookieParser());

app.get('/', [getCookie], (req, res) => {
  return console.log('getCookie');
});

// app.get('/', [indexView], (req, res) => {
//   console.log(`cookieValue is:${req.cookies['ory_sessions']}`);
//   res.status(200).json(req.body);
// });

app.get('/login', (req, res) => {
  console.log('login');
  res.sendFile(__dirname + '/login.html');
});

// app.get('/login', [setCookie], (req, res) => {
//   console.log('setCookie');
//   return res.sendFile(path.join(__dirname, '/views/login.html'));
// });

// app.get('/home', [cookieValue], (req, res) => {
//   res.send(cookieValue);
// });

app.listen(3000);
