const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = require('./routes/index');
app.use(route);

const port = process.env.PORT || 2018;
app.listen(port, process.env.IP, () => {
  console.log('Server Started on Port: ', port);
});

module.exports = app;
