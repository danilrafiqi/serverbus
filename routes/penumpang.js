const express = require('express')
const router = express.Router()
const penumpangCtrl = require('../controllers/penumpangCtrl')

router.get('/',penumpangCtrl.all )
router.get('/:id_penumpang',penumpangCtrl.detail )
router.post('/', penumpangCtrl.post)
router.put('/:id_penumpang', penumpangCtrl.edit)
router.delete('/:id_penumpang', penumpangCtrl.delete)

module.exports = router;