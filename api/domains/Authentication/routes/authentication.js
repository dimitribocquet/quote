const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login');
const registerController = require('../controllers/register');
const loggedUserController = require('../controllers/loggedUser');

const isAuthenticatedMiddleware = require('../middlewares/isAuthenticated');

router.post('/login', loginController);
router.post('/register', registerController);
router.get('/user', isAuthenticatedMiddleware, loggedUserController);
router.get('/refresh', isAuthenticatedMiddleware, loggedUserController);

module.exports = router;
