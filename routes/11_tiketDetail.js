const express = require('express');
const router = express.Router();
const tiketCtrl = require('../controllers/11_tiketDetailCtrl');

router.get('/', tiketCtrl.all);
router.get('/:id', tiketCtrl.detail);
router.post('/', tiketCtrl.post);
router.put('/:id', tiketCtrl.edit);
router.delete('/:id', tiketCtrl.delete);

module.exports = router;