const express = require('express');

const PublicBidsController = require('../controllers/PublicBidsController');

const publicBidRouter = express.Router();


publicBidRouter.get('/', PublicBidsController.list);
publicBidRouter.get('/:id', PublicBidsController.show);

module.exports = publicBidRouter;
