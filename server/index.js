const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

if (process.env.NODE_ENV === 'dev') {
  const dotenv = require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const api = require('./api');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.use('*', cors()); // enable pre-flight CORS

// pulls from the /dist folder, meaning you don't have to explicitly server the '/' route
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', api);

app.all('*', (req, res) => res.status(404).end('Page Not Found'));

app.listen(PORT, () => {
  console.log(`PEX is up and running on port ${PORT}`);
});
