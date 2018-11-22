const knex = require('../db/knex');
const table = 'tujuan';
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
      .where('id_tujuan', req.params.id_tujuan)
      .then(datas => {
        res.send(datas);
      });
  },

  post: (req, res) => {
    const data = {
      id_tujuan: uuidv4(),
      nama: req.body.nama,
      lokasi_awal: req.body.lokasi_awal,
      updated_at: knexDate,
      lokasi_tujuan: req.body.lokasi_tujuan
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
      lokasi_awal: req.body.lokasi_awal,
      lokasi_tujuan: req.body.lokasi_tujuan
    };
    knex(table)
      .where('id_tujuan', req.params.id_tujuan)
      .update(data)
      .then(datas => {
        res.send('success update : ' + req.params.id_tujuan);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id_tujuan', req.params.id_tujuan)
      .del()
      .then(() => {
        res.send('success delete : ' + req.params.id_tujuan);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
