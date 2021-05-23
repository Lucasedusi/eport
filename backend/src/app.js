require('express-async-errors');

const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const errorHandler = require('./errors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

module.exports = app;
