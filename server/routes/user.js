const express = require('express')

const {login,register,me} = require('../controllers/user')
const {isAuthenticated} = require('../middlewares/auth')

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(isAuthenticated,me)


module.exports = router;