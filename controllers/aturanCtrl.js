const knex = require('../db/knex');
const table = 'aturan';
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
      .where('id_aturan', req.params.id_aturan)
      .then(datas => {
        res.send(datas);
      });
  },

  post: (req, res) => {
    const data = {
      id_aturan: uuidv4(),
      aturan_ppn: req.body.aturan_ppn,
      aturan_pembatalan: req.body.aturan_pembatalan,
      aturan_penumpang: req.body.aturan_penumpang
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
      aturan_ppn: req.body.aturan_ppn,
      aturan_pembatalan: req.body.aturan_pembatalan,
      updated_at: knexDate,
      aturan_penumpang: req.body.aturan_penumpang
    };
    knex(table)
      .where('id_aturan', req.params.id_aturan)
      .update(data)
      .then(datas => {
        res.send('success update : ' + req.params.id_aturan);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id_aturan', req.params.id_aturan)
      .del()
      .then(() => {
        res.send('success delete : ' + req.params.id_aturan);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
