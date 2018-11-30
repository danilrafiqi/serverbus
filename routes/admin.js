const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

router.get('/', adminCtrl.all);
router.get('/:id_admin', adminCtrl.detail);
router.post('/', adminCtrl.unggah, adminCtrl.post);
router.put('/:id_admin', adminCtrl.edit);
router.delete('/:id_admin', adminCtrl.delete);

module.exports = router;
