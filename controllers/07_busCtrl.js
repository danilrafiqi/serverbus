const knex = require('../db/knex');
const table = 'bus';
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
      .where('id', req.params.id)
      .then(datas => {
        res.send(datas);
      });
  },

  post: (req, res) => {
    const data = {
      id: uuidv4(),
      plat: req.body.plat,
      jumlah_kursi: req.body.jumlah_kursi,
      kelas_id: req.body.kelas_id
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
      plat: req.body.plat,
      jumlah_kursi: req.body.jumlah_kursi,
      kelas_id: req.body.kelas_id,
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
