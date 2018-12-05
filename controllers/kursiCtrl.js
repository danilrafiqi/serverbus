const knex = require('../db/knex');
const table = 'kursi';
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
      .where('id_kursi', req.params.id_kursi)
      .then(datas => {
        res.send(datas);
      });
  },

  post: (req, res) => {
    const data = {
      id_kursi: uuidv4(),
      kode: req.body.kode,
      no_plat: req.body.no_plat
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
      no_plat: req.body.no_plat,
      updated_at: knexDate
    };
    knex(table)
      .where('id_kursi', req.params.id_kursi)
      .update(data)
      .then(datas => {
        res.send('success update : ' + req.params.id_kursi);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id_kursi', req.params.id_kursi)
      .del()
      .then(() => {
        res.send('success delete : ' + req.params.id_kursi);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
