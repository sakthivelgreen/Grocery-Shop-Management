const express = require('express');
const router = express.Router();
const { renderHomepage } = require('../controllers/staticController');

router.get('/', renderHomepage);

module.exports = router;