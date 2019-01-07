const express = require('express');
const router = express.Router();
const poCtrl = require('../controllers/01_poCtrl');

router.get('/', poCtrl.all);
router.post('/', poCtrl.post);
router.get('/total', poCtrl.total);
router.get('/:id', poCtrl.detail);
router.put('/:id', poCtrl.edit);
router.delete('/:id', poCtrl.delete);

module.exports = router;
