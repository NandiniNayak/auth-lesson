const express = require('express');
const router = express.Router();
const {
    index,
    dashboard
} = require('../controllers/page_controller');

router.get('/', index);
router.get('/dashboard', dashboard);

module.exports = router;