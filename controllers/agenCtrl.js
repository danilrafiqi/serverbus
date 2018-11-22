const knex = require('../db/knex');
const table = 'agen';
const knexDate = knex.fn.now();
const uuidv4 = require('uuid/v4');

module.exports = {
  all: (req, res) => {
    knex
      .select()
      .from(table)
      .orderBy('created_at', 'desc')
      .then(datas => {
        res.send(datas);
      });
  },

  detail: (req, res) => {
    knex
      .select()
      .from(table)
      .where('id_agen', req.params.id_agen)
      .then(datas => {
        res.send(datas);
      });
  },
  post: (req, res) => {
    const data = {
      id_agen: uuidv4(),
      nama: req.body.nama,
      lokasi: req.body.lokasi,
      no_hp: req.body.no_hp,
      id_po: req.body.id_po
    };

    knex(table)
      .insert(data)
      .then(datas => {
        res.send('success');
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  edit: (req, res) => {
    const data = {
      nama: req.body.nama,
      lokasi: req.body.lokasi,
      no_hp: req.body.no_hp,
      updated_at: knexDate,
      id_po: req.body.id_po
    };
    knex(table)
      .where('id_agen', req.params.id_agen)
      .update(data)
      .then(datas => {
        res.send('success update : ' + req.params.id_agen);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id_agen', req.params.id_agen)
      .del()
      .then(() => {
        res.send('success delete : ' + req.params.id_agen);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
