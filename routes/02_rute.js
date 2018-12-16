const express = require('express');
const router = express.Router();
const ruteCtrl = require('../controllers/02_ruteCtrl');

router.get('/', ruteCtrl.all);
router.get('/:id', ruteCtrl.detail);
router.post('/', ruteCtrl.post);
router.put('/:id', ruteCtrl.edit);
router.delete('/:id', ruteCtrl.delete);

module.exports = router;
