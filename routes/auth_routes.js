const express = require('express');
const router = express.Router();
const { authRedirect } = require("../middleware/authorisation_middleware");
const {
    registerNew,
    registerCreate,
    logout,
    loginNew,
    loginCreate
} = require('../controllers/auth_controller');

router.get('/register', authRedirect, registerNew);
router.post('/register', registerCreate);
router.get('/logout', logout);
router.get('/login',authRedirect, loginNew)
router.post('/login', loginCreate)


module.exports = router;