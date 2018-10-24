const express = require('express')
const router = express.Router()
const kursiCtrl = require('../controllers/kursiCtrl')

router.get('/',kursiCtrl.all )
router.get('/:id',kursiCtrl.detail )
router.post('/', kursiCtrl.post)
router.put('/:id', kursiCtrl.edit)
router.delete('/:id', kursiCtrl.delete)

module.exports = router;
