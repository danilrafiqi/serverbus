const express = require('express');
const router = express.Router();
const pemesanCtrl = require('../controllers/pemesanCtrl');

router.get('/', pemesanCtrl.all);
router.get('/:id_pemesan', pemesanCtrl.detail);
router.post('/', pemesanCtrl.post);
router.put('/:id_pemesan', pemesanCtrl.edit);
router.delete('/:id_pemesan', pemesanCtrl.delete);

module.exports = router;
