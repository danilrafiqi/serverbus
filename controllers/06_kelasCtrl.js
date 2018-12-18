const knex = require('../db/knex');
const table = 'kelas';
const knexDate = knex.fn.now();
const uuidv4 = require('uuid/v4');

module.exports = {
  all: (req, res) => {
    knex
      .select('kelas.*', 'po.nama as po')
      .from(table)
      .innerJoin('po', 'kelas.po_id', '=', 'po.id')
      .orderBy('kelas.created_at', 'desc')
      .then(datas => {
        res.send(datas);
      });
  },

  detail: (req, res) => {
    knex
      .select()
      .from(table)
      .where('id', req.params.id)
      .then(datas => {
        res.send(datas);
      });
  },

  post: (req, res) => {
    const data = {
      id: uuidv4(),
      kode: req.body.kode,
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      po_id: req.body.po_id
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
      kode: req.body.kode,
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      po_id: req.body.po_id,
      updated_at: knexDate
    };
    knex(table)
      .where('id', req.params.id)
      .update(data)
      .then(datas => {
        res.send('success update : ' + req.params.id);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.send('success delete : ' + req.params.id);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
