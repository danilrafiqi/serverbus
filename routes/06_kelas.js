const express = require('express');
const router = express.Router();
const kelasCtrl = require('../controllers/06_kelasCtrl');

router.get('/', kelasCtrl.all);
router.get('/:po_id/bypo', kelasCtrl.allByPo);
router.get('/:id', kelasCtrl.detail);
router.post('/', kelasCtrl.post);
router.put('/:id', kelasCtrl.edit);
router.delete('/:id', kelasCtrl.delete);

module.exports = router;
