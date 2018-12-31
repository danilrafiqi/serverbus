const express = require('express');
const router = express.Router();
const pesan = require('../controllers/pesanCtrl');

router.post('/penumpang', pesan.penumpang);
router.post('/tiket', pesan.tiket);

module.exports = router;
