const knex = require('../db/knex');
module.exports = {
  jumlahAgen: (req, res) => {
    knex
      .select('po.nama as nama')
      .count('agen.nama as jumlah')
      .from('agen')
      .innerJoin('po', 'agen.id_po', '=', 'po.id_po')
      .then(datas => {
        res.send(datas);
      });
  },
  jumlahBis: (req, res) => {
    knex
      .select('po.nama as nama')
      .count('bus.no_plat as jumlah')
      .from('bus')
      .innerJoin('po', 'bus.id_po', '=', 'po.id_po')
      .then(datas => {
        res.send(datas);
      });
  }
};
