const express = require('express');
const router = express.Router();
const { renderHomepage, renderLoginPage, renderSignupPage } = require('../controllers/staticController');

router.get('/', renderHomepage);
router.get('/login', renderLoginPage);
router.get('/signup', renderSignupPage);

module.exports = router;