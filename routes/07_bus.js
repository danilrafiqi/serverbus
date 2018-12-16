const express = require('express');
const router = express.Router();
const busCtrl = require('../controllers/07_busCtrl');

router.get('/', busCtrl.all);
router.get('/:id', busCtrl.detail);
router.post('/', busCtrl.post);
router.put('/:id', busCtrl.edit);
router.delete('/:id', busCtrl.delete);

module.exports = router;
