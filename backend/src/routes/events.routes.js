const express = require('express');

const ensureIsPoster = require('../middlewares/ensureIsPoster');
const EventsController = require('../controllers/EventsController');

const eventRouter = express.Router();

eventRouter.get('/', EventsController.list);
eventRouter.post('/', ensureIsPoster, EventsController.store);
eventRouter.get('/:id', EventsController.show);
eventRouter.put('/:id', ensureIsPoster, EventsController.edit);
eventRouter.delete('/:id', ensureIsPoster, EventsController.destroy);

module.exports = eventRouter;
