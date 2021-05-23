const express = require('express');

const SegmentsController = require('../controllers/SegmentsController');

const segmentRouter = express.Router();

segmentRouter.get('/', SegmentsController.list);

module.exports = segmentRouter;
