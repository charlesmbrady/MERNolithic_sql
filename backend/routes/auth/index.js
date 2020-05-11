const router = require('express').Router();
// const passport = require('../../passport');
const usersController = require('../../controllers/usersController');
const withAuth = require('../../middleware.js');

// router.post('/login', usersController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/authenticate', usersController.authenticate);
router.post('/user', usersController.register);
router.get('/checkToken', usersController.checkToken);
router.get('/logout', withAuth, usersController.logout);
router.get('/users', usersController.getUsers);

module.exports = router;
