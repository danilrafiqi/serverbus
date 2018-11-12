const express = require('express')
const router = express.Router()
const kelasCtrl = require('../controllers/kelasCtrl')

router.get('/',kelasCtrl.all )
router.get('/:id_kelas',kelasCtrl.detail )
router.post('/', kelasCtrl.post)
router.put('/:id_kelas', kelasCtrl.edit)
router.delete('/:id_kelas', kelasCtrl.delete)

module.exports = router;