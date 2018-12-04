const express = require('express');
const router = express.Router();
const jadwalCtrl = require('../controllers/jadwalCtrl');

router.get('/', jadwalCtrl.all);
router.get('/:id_jadwal', jadwalCtrl.detail);
router.post('/', jadwalCtrl.post);
router.put('/:id_jadwal', jadwalCtrl.edit);
router.delete('/:id_jadwal', jadwalCtrl.delete);

module.exports = router;
