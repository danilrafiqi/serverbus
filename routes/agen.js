const express = require('express')
const router = express.Router()
const agenCtrl = require('../controllers/agenCtrl')

router.get('/',agenCtrl.all )
router.get('/:id_agen',agenCtrl.detail )
router.post('/', agenCtrl.post)
router.put('/:id_agen', agenCtrl.edit)
router.delete('/:id_agen', agenCtrl.delete)

module.exports = router;
