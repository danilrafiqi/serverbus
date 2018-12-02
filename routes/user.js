const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

router.get('/', userCtrl.all);
router.get('/:id_user', userCtrl.detail);
router.post('/', userCtrl.unggah, userCtrl.post);
router.put('/:id_user', userCtrl.edit);
router.delete('/:id_user', userCtrl.delete);

module.exports = router;
