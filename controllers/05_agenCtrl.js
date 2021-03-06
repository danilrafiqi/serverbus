const knex = require('../db/knex');
const table = 'agen';
const knexDate = knex.fn.now();
const uuidv4 = require('uuid/v4');

module.exports = {
  all: (req, res) => {
    knex
      .select('agen.*', 'po.nama as po')
      .from(table)
      .innerJoin('po', 'agen.po_id', '=', 'po.id')
      .orderBy('agen.created_at', 'desc')
      .then(datas => {
        res.send(datas);
      });
  },

  allByPo: (req, res) => {
    knex
      .select('agen.*', 'po.nama as po')
      .from(table)
      .innerJoin('po', 'agen.po_id', '=', 'po.id')
      .orderBy('agen.created_at', 'desc')
      .where('po_id', req.params.po_id)
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
      nama: req.body.nama,
      email: req.body.email,
      no_hp: req.body.no_hp,
      alamat: req.body.alamat,
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
      email: req.body.email,
      no_hp: req.body.no_hp,
      alamat: req.body.alamat,
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
        res.send({ message: 'success' });
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
