const express = require('express');
const router = express.Router();
const aturanCtrl = require('../controllers/aturanCtrl');

router.get('/', aturanCtrl.all);
router.get('/:id_aturan', aturanCtrl.detail);
router.post('/', aturanCtrl.post);
router.put('/:id_aturan', aturanCtrl.edit);
router.delete('/:id_aturan', aturanCtrl.delete);

module.exports = router;
