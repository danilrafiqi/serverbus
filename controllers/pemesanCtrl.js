const knex = require('../db/knex');
const table = 'pemesan';
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
      .where('id_pemesan', req.params.id_pemesan)
      .then(datas => {
        res.send(datas);
      });
  },

  post: (req, res) => {
    const data = {
      id_pemesan: uuidv4(),
      nama: req.body.nama,
      no_hp: req.body.no_hp,
      email: req.body.email
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
      no_hp: req.body.no_hp,
      updated_at: knexDate,
      email: req.body.email
    };
    knex(table)
      .where('id_pemesan', req.params.id_pemesan)
      .update(data)
      .then(datas => {
        res.send('success update : ' + req.params.id_pemesan);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id_pemesan', req.params.id_pemesan)
      .del()
      .then(() => {
        res.send('success delete : ' + req.params.id_pemesan);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
