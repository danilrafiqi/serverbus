const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/13_operatorCtrl');

router.get('/:po_id/bypo', userCtrl.allByPo);
router.get('/', userCtrl.all);
router.get('/:id', userCtrl.detail);
router.post('/', userCtrl.unggah, userCtrl.post);
router.put('/:id', userCtrl.unggah, userCtrl.edit);
router.put('/:id', userCtrl.unggah, userCtrl.edit);
router.delete('/:id', userCtrl.delete);

module.exports = router;
