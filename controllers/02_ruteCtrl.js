const knex = require('../db/knex');
const table = 'rute';
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

  allByPo: (req, res) => {
    knex
      .select()
      .from(table)
      .orderBy('created_at', 'desc')
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
      po_id: req.body.po_id,
      deskripsi: req.body.deskripsi
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
      po_id: req.body.po_id,
      deskripsi: req.body.deskripsi,
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
