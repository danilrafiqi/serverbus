const express = require('express');
const router = express.Router();
const managerPoCtrl = require('../controllers/dashboard.manager.po.ctrl');

router.get('/total-agen/:po_id', managerPoCtrl.totalAgen);
router.get('/total-tiket-terjual/:po_id', managerPoCtrl.totalTiketTerjual);
router.get('/total-pendapatan/:po_id', managerPoCtrl.totalPendapatan);
// router.get('/total-pendapatan-by-po/:po_id', managerPoCtrl.totalPendapatanByPo);
router.get(
  '/total-pendapatan-by-bulan/:po_id',
  managerPoCtrl.totalPendapatanByBulan
);

module.exports = router;
