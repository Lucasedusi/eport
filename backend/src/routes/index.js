const express = require('express');

const sessionRouter = require('./sessions.routes');
const userRouter = require('./users.routes');
const publicBidRouter = require('./publicBids.routes');
const eventRouter = require('./events.routes');
const segmentRouter = require('./segments.routes');

const router = express.Router();

router.use('/sessions', sessionRouter);
router.use('/users', userRouter);
router.use('/publicBids', publicBidRouter);
router.use('/events', eventRouter);
router.use('/segments', segmentRouter);

module.exports = router;
