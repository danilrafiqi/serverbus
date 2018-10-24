const express = require('express')
const router = express.Router()
const agenCtrl = require('../controllers/agenCtrl')

router.get('/',agenCtrl.all )
router.get('/:id',agenCtrl.detail )
router.post('/', agenCtrl.post)
router.put('/:id', agenCtrl.edit)
router.delete('/:id', agenCtrl.delete)

module.exports = router;
