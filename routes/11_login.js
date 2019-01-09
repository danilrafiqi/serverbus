const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/11_login');

router.get('/', loginCtrl.all);
router.get('/all', loginCtrl.allWithView);
router.get('/profile/:email', loginCtrl.getProfile);
// router.get('/:id', loginCtrl.detail);
router.post('/', loginCtrl.post);
router.put('/password/:email', loginCtrl.updatePassword);
// router.put('/:email', loginCtrl.edit);
router.delete('/:email', loginCtrl.delete);

module.exports = router;
