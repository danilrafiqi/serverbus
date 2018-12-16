const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/12_adminCtrl');

router.get('/', adminCtrl.all);
router.get('/:id', adminCtrl.detail);
router.post('/', adminCtrl.unggah, adminCtrl.post);
router.put('/:id', adminCtrl.unggah, adminCtrl.edit);
router.delete('/:id', adminCtrl.delete);

module.exports = router;
