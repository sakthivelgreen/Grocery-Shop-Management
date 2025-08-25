const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userController');


router.post('/login', controllers.handleUserLogin);
router.post('/signup', controllers.handleUserSignup);
router.get('/logout', controllers.handleUserLogout);


module.exports = router;