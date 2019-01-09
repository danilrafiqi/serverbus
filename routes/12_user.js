const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/12_userCtrl');

router.put('/profile/:email', userCtrl.editByEmail);
router.get('/', userCtrl.all);
router.get('/:id', userCtrl.detail);
router.post('/', userCtrl.unggah, userCtrl.post);
router.put('/:id', userCtrl.unggah, userCtrl.edit);
router.delete('/:id', userCtrl.delete);

module.exports = router;
