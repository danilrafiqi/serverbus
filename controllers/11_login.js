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
  allWithView: (req, res) => {
    knex
      .select()
      .from('v_login')
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
  getProfile: (req, res) => {
    knex
      .select()
      .from('v_profile')
      .where('email', req.params.email)
      .then(datas => {
        res.send(datas);
      });
  },
  post: (req, res) => {
    knex
      .select()
      .from(table)
      .where('email', req.body.email)
      .then(datas => {
        if (datas.length == 0) {
          const password = crypto
            .createHmac('sha256', secret)
            .update(req.body.password)
            .digest('hex');
          console.log('aa', password);

          const data = {
            password: password,
            email: req.body.email,
            hak_akses: req.body.hak_akses
          };
          console.log('iki popo', datas);
          console.log('data', req.body);
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
          console.log('gagal');
        }
      });
  },

  updatePassword: (req, res) => {
    const password_lama = crypto
      .createHmac('sha256', secret)
      .update(req.body.password_lama)
      .digest('hex');

    knex
      .select()
      .from(table)
      .where('password', password_lama)
      .then(datas => {
        if (datas.length == 0) {
          return res.send({ message: 'notvalid' });
        } else {
          const password_baru = crypto
            .createHmac('sha256', secret)
            .update(req.body.password_baru)
            .digest('hex');

          const data = {
            password: password_baru
          };

          knex(table)
            .where('email', req.params.email)
            .update(data)
            .then(datas => {
              res.send({ message: 'success' });
            })
            .catch(err => {
              res.send('error disini : ' + err);
            });
        }
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('email', req.params.email)
      .del()
      .then(result => {
        res.send({ message: 'success' });
      })
      .catch(err => {
        res.send({ message: 'failed' });
      });
  }
};
