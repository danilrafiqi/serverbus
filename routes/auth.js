var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const auth = require('../controllers/authCtrl');

const cekAuth = require('../middlewares/auth');

/* Route alternatif */
router.post('/signin', auth.signin);
router.get('/getuser', cekAuth, auth.getUser);
// router.post('/signup', auth.signup);

module.exports = router;
