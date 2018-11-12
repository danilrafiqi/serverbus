const express = require('express')
const router = express.Router()
const ruteCtrl = require('../controllers/ruteCtrl')

router.get('/',ruteCtrl.all )
router.get('/:id_rute',ruteCtrl.detail )
router.post('/', ruteCtrl.post)
router.put('/:id_rute', ruteCtrl.edit)
router.delete('/:id_rute', ruteCtrl.delete)

module.exports = router;