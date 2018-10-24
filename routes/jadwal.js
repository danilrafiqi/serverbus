const express = require('express')
const router = express.Router()
const jadwalCtrl = require('../controllers/jadwalCtrl')

router.get('/',jadwalCtrl.all )
router.get('/:id',jadwalCtrl.detail )
router.post('/', jadwalCtrl.post)
router.put('/:id', jadwalCtrl.edit)
router.delete('/:id', jadwalCtrl.delete)

module.exports = router;
