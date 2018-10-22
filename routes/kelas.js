const express = require('express')
const router = express.Router()
const kelasCtrl = require('../controllers/kelasCtrl')

router.get('/',kelasCtrl.all )
router.get('/:id',kelasCtrl.detail )
router.post('/', kelasCtrl.post)
router.put('/:id', kelasCtrl.edit)
router.delete('/:id', kelasCtrl.delete)

module.exports = router;