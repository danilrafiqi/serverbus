const express = require('express');
const router = express.Router();
const kursiCtrl = require('../controllers/kursiCtrl');

router.get('/', kursiCtrl.all);
router.get('/:id_kursi', kursiCtrl.detail);
router.post('/', kursiCtrl.post);
router.put('/:id_kursi', kursiCtrl.edit);
router.delete('/:id_kursi', kursiCtrl.delete);

module.exports = router;
