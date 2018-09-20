const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')

router.get('/',userCtrl.all )
router.get('/:id',userCtrl.detail )
router.post('/', userCtrl.post)
router.put('/:id', userCtrl.edit)
router.delete('/:id', userCtrl.delete)

module.exports = router;