const knex = require('../db/knex');
const table = 'login';
const knexDate = knex.fn.now();
// const uuidv4 = require('uuid/v4');
const crypto = require('crypto');
const secret = 'drcreative';

module.exports = {
  all: (req, res) => {
    knex
      .select()
      .from(table)
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
    knex
      .select()
      .from(table)
      .where('username', req.body.username)
      .then(datas => {
        if (datas.length == 0) {
          const password = crypto
            .createHmac('sha256', secret)
            .update(req.body.password)
            .digest('hex');
          console.log('aa', password);

          const data = {
            // id: uuidv4(),
            username: req.body.username,
            password: password,
            email: req.body.email,
            hak_akses: req.body.hak_akses
          };

          knex(table)
            .insert(data)
            .then(() => {
              res.send('success');
            })
            .catch(err => {
              res.send('error disini : ' + err);
            });
        } else {
          // console.log('muh');
          return res.send('user found');
        }
      });
  },

  edit: (req, res) => {
    const data = {
      kode: req.body.kode,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      nama: req.body.nama,
      jenis_kelamin: req.body.jenis_kelamin,
      hak_akses: req.body.hak_akses,
      foto: req.file.path,
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
