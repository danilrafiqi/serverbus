const knex = require('../db/knex');
const table = 'v_login';
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const secret = 'drcreative';

module.exports = {
  signin: (req, res) => {
    const password = crypto
      .createHmac('sha256', secret)
      .update(req.body.password)
      .digest('hex');

    knex
      .select()
      .from(table)
      .where('email', req.body.email)
      .where('password', password)
      .then(datas => {
        const token = jwt.sign(
          {
            email: datas[0].email,
            username: datas[0].username,
            hak_akses: datas[0].hak_akses,
            po: datas[0].po
          },
          'bismillah',
          {
            expiresIn: '1h'
          }
        );
        res.send(token);
      })
      .catch(err => {
        res.send('unauthorized');
      });
  },
  getUser: (req, res) => {
    res.send(req.user);
  }
};
