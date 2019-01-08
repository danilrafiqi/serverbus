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
      .where('status', 'lunas')
      .then(data => {
        res.send(data);
      });
  },
  totalPendapatanByBulan: (req, res) => {
    // SELECT SUM(harga) AS total, MONTHNAME( tanggal_keberangkatan) AS bulan FROM cektiket GROUP BY bulan
    knex('cektiket')
      .select(
        knex.raw(
          'SUM(harga) AS total, MONTHNAME( tanggal_keberangkatan) as bulan'
        )
      )
      .sum('harga as total')
      .groupBy('bulan')
      .where('status', 'lunas')
      .then(data => {
        res.send(data);
      });

    // knex('cektiket')
    //   .select('tanggal_keberangkatan as bulan')
    //   .sum('harga as total')
    //   .groupBy('bulan')
    //   .then(data => {
    //     res.send(data);
    //   });
  }
};
