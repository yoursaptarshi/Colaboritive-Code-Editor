const express = require('express')

const {saveCode} = require('../controllers/codebase')
const {isAuthenticated} = require('../middlewares/auth')

const router = express.Router();

router.route('/save-code').post(isAuthenticated,saveCode);



module.exports = router;