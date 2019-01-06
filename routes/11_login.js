const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/11_login');

router.get('/', loginCtrl.all);
// router.get('/:id', loginCtrl.detail);
router.post('/', loginCtrl.post);
// router.put('/:id', loginCtrl.edit);
// router.delete('/:id', loginCtrl.delete);

module.exports = router;
