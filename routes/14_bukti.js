const express = require('express');
const router = express.Router();
const buktiCtrl = require('../controllers/14_buktiCtrl');

router.get('/', buktiCtrl.all);
// router.get('/:id', buktiCtrl.detail);
router.post('/', buktiCtrl.unggah, buktiCtrl.post);
// router.put('/:id', buktiCtrl.unggah, buktiCtrl.edit);
// router.delete('/:id', buktiCtrl.delete);

module.exports = router;
