const express = require('express');
const router = express.Router();
const agenCtrl = require('../controllers/05_agenCtrl');

router.get('/', agenCtrl.all);
router.get('/:po_id/bypo', agenCtrl.allByPo);
router.get('/:id', agenCtrl.detail);
router.post('/', agenCtrl.post);
router.put('/:id', agenCtrl.edit);
router.delete('/:id', agenCtrl.delete);

module.exports = router;
