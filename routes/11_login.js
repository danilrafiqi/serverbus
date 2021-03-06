const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/11_login');

router.get('/', loginCtrl.all);
router.get('/all', loginCtrl.allWithView);
router.get('/profile/:email', loginCtrl.getProfile);
router.post('/', loginCtrl.post);
router.put('/password/:email', loginCtrl.updatePassword);
router.put('/newpassword/:email', loginCtrl.newPassword);
router.get('/:email/bypo/:po_id', loginCtrl.detailByPo);
router.get('/:po_id/bypo', loginCtrl.allByPo);
router.put('/:email', loginCtrl.edit);
router.get('/:email', loginCtrl.detail);
router.delete('/:email', loginCtrl.delete);

module.exports = router;
