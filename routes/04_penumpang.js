const express = require('express');
const router = express.Router();
const penumpangCtrl = require('../controllers/04_penumpangCtrl');

router.get('/', penumpangCtrl.all);
router.get('/:id', penumpangCtrl.detail);
router.post('/', penumpangCtrl.post);
router.put('/:id', penumpangCtrl.edit);
router.delete('/:id', penumpangCtrl.delete);

module.exports = router;
