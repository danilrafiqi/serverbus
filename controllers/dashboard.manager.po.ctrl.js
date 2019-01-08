const knex = require('../db/knex');

module.exports = {
  totalAgen: (req, res) => {
    knex('agen')
      .count('id as total_agen')
      .where('po_id', 'like', req.params.po_id)
      .then(data => {
        res.send(data);
      });
  },
  totalTiketTerjual: (req, res) => {
    knex('cektiket')
      .count('book_id as total_tiket_terjual')
      .where('status', 'lunas')
      .andWhere('po_id', 'like', req.params.po_id)
      .then(data => {
        res.send(data);
      });
  },
  totalPendapatan: (req, res) => {
    knex('cektiket')
      .sum('harga as total_pendapatan')
      .where('status', 'lunas')
      .andWhere('po_id', 'like', req.params.po_id)
      .then(data => {
        res.send(data);
      });
  },

  totalPendapatanByBulan: (req, res) => {
    knex('cektiket')
      .select(
        knex.raw(
          'SUM(harga) AS total, MONTHNAME( tanggal_keberangkatan) as bulan'
        )
      )
      .sum('harga as total')
      .groupBy('bulan')
      .where('status', 'lunas')
      .andWhere('po_id', 'like', req.params.po_id)
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
