const knex = require('../db/knex');

module.exports = {
  totalKaryawan: (req, res) => {
    knex('user')
      .count('email as total_karyawan')
      .then(data => {
        res.send(data);
      });
  },
  totalKaryawanPo: (req, res) => {
    knex('tiket')
      .count('email as total_karyawan_po')
      .then(data => {
        res.send(data);
      });
  },
  totalUser: (req, res) => {
    knex('tiket')
      .count('email as total_user')
      .then(data => {
        res.send(data);
      });
  }
};
