const express = require('express')
const router = express.Router()
const busCtrl = require('../controllers/busCtrl')

router.get('/',busCtrl.all )
router.get('/:id_bus',busCtrl.detail )
router.post('/', busCtrl.post)
router.put('/:id_bus', busCtrl.edit)
router.delete('/:id_bus', busCtrl.delete)

module.exports = router;
