const knex = require('../db/knex');
const table = 'po';
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
      kode: req.body.kode,
      nama: req.body.nama,
      alamat: req.body.alamat,
      no_hp: req.body.no_hp,
      email: req.body.email
    };

    knex(table)
      .insert(data)
      .then(() => {
        res.status(200).send({
          message: 'success insert',
          data
        });
      })
      .catch(err => {
        res.send({
          message: err,
          data
        });
      });
  },
  edit: (req, res) => {
    const data = {
      kode: req.body.kode,
      nama: req.body.nama,
      alamat: req.body.alamat,
      no_hp: req.body.no_hp,
      email: req.body.email,
      updated_at: knexDate
    };
    knex(table)
      .where('id', req.params.id)
      .update(data)
      .then(() => {
        res.send({
          message: 'success update',
          id: req.params.id
        });
      })
      .catch(err => {
        res.send({
          message: err
        });
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.status(200).send({
          message: 'success delete',
          id: req.params.id
        });
      })
      .catch(err => {
        res.send({
          message: err
        });
      });
  },
  total: (req, res) => {
    knex(table)
      .count('id as total_po')
      .then(data => {
        console.log('data', data);
        res.send(data);
      });
  }
};
