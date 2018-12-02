const express = require('express')
const router = express.Router()
const cariJadwalCtrl = require('../controllers/cariJadwalCtrl')

router.get('/',cariJadwalCtrl.detail )
module.exports = router;
