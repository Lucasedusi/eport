const express = require('express');

const SessionsController = require('../controllers/SessionsController');

const sessionRouter = express.Router();

sessionRouter.post('/', SessionsController.create);

module.exports = sessionRouter;
