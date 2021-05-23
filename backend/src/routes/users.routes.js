const express = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const UsersController = require('../controllers/UsersController');

const userRouter = express.Router();

userRouter.post('/', UsersController.store);
userRouter.get('/:id', ensureAuthenticated, UsersController.show);
userRouter.put('/:id', ensureAuthenticated, UsersController.edit);
userRouter.delete('/:id', ensureAuthenticated, UsersController.destroy);

module.exports = userRouter;
