const express = require('express');
const router = express.Router();
const bankCtrl = require('../controllers/03_bankCtrl');

router.get('/', bankCtrl.all);
router.get('/:id', bankCtrl.detail);
router.post('/', bankCtrl.post);
router.put('/:id', bankCtrl.edit);
router.delete('/:id', bankCtrl.delete);

module.exports = router;
