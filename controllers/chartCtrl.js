const knex = require('../db/knex');
module.exports = {
  jumlahAgen: (req, res) => {
    // SELECT COUNT(*), po.nama FROM `agen` INNER JOIN po ON agen.id_po = po.id_po GROUP BY agen.id_po

    knex
      .select('po.nama as nama')
      .count('agen.nama as jumlah')
      .from('agen')
      .innerJoin('po', 'agen.id_po', '=', 'po.id_po')
      .then(datas => {
        res.send(datas);
      });
  }
};
