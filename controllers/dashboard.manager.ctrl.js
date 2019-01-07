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
  }
};
