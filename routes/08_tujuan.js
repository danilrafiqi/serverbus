const express = require('express');
const router = express.Router();
const tujuanCtrl = require('../controllers/08_tujuanCtrl');

router.get('/:po_id/bypo', tujuanCtrl.allByPo);
router.get('/', tujuanCtrl.all);
router.get('/:id', tujuanCtrl.detail);
router.post('/', tujuanCtrl.post);
router.put('/:id', tujuanCtrl.edit);
router.delete('/:id', tujuanCtrl.delete);

module.exports = router;
