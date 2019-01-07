const knex = require('../db/knex');

module.exports = {
  totalPo: (req, res) => {
    knex('po')
      .count('id as total_po')
      .then(data => {
        res.send(data);
      });
  },
  totalTiketTerjual: (req, res) => {
    knex('tiket')
      .count('id as total_tiket_terjual')
      .where('status', 'lunas')
      .then(data => {
        res.send(data);
      });
  },
  totalPendapatan: (req, res) => {
    knex('tiket')
      .sum('total as total_pendapatan')
      .where('status', 'lunas')
      .then(data => {
        res.send(data);
      });
  },
  totalPendapatanByPo: (req, res) => {
    knex('cektiket')
      .select('po_nama')
      .sum('harga as total')
      .groupBy('po_nama')
      .then(data => {
        res.send(data);
      });
    // SELECT SUM(harga) AS total, po_nama FROM cektiket GROUP BY po_nama
  }
};
