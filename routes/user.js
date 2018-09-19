const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')

router.get('/',userCtrl.getNama )

router.get('/detail', userCtrl.getDetail)

router.get('/:id', userCtrl.getData)

module.exports = router;