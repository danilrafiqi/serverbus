const express = require('express');
const router = express.Router();

// import routes
const poRoute = require('./01_po');
const ruteRoute = require('./02_rute');
const bankRoute = require('./03_bank');

// use routes
router.use('/po', poRoute);
router.use('/rute', ruteRoute);
router.use('/bank', bankRoute);

module.exports = router;
