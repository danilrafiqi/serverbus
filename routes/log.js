const express = require('express')
const router = express.Router()
const kelasCtrl = require('../controllers/kelasCtrl')

router.get('/',kelasCtrl.all )
router.get('/:id_log',kelasCtrl.detail )
router.post('/', kelasCtrl.post)
router.put('/:id_log', kelasCtrl.edit)
router.delete('/:id_log', kelasCtrl.delete)

module.exports = router;