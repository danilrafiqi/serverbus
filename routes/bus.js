const express = require('express');
const router = express.Router();
const busCtrl = require('../controllers/busCtrl');

router.get('/', busCtrl.all);
router.get('/:no_plat', busCtrl.detail);
router.post('/', busCtrl.post);
router.put('/:no_plat', busCtrl.edit);
router.delete('/:no_plat', busCtrl.delete);

module.exports = router;
