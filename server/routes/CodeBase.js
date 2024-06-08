const express = require('express')

const {saveCode, findCode} = require('../controllers/codebase')
const {isAuthenticated} = require('../middlewares/auth')

const router = express.Router();

router.route('/save-code').post(isAuthenticated,saveCode);
router.route('/find-code').get(isAuthenticated,findCode)



module.exports = router;