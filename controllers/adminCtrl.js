const knex = require('../db/knex');
const table = 'admin';
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
      .where('id_admin', req.params.id_admin)
      .then(datas => {
        res.send(datas);
      });
  },

  post: (req, res) => {
    let uploadFile = req.files.file;
    const fileName = req.files.file.name;
    uploadFile.mv(`${__dirname}/public/files/${fileName}`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({
        file: `public/files/${req.files.file.name}`
      });
    });

    const data = {
      id_admin: uuidv4(),
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      nama: req.body.nama,
      jenis_kelamin: req.body.jenis_kelamin,
      jenis_kelamin: req.body.jenis_kelamin,
      foto: req.body.foto
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
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      nama: req.body.nama,
      jenis_kelamin: req.body.jenis_kelamin,
      updated_at: knexDate,
      foto: req.body.foto
    };
    knex(table)
      .where('id_admin', req.params.id_admin)
      .update(data)
      .then(datas => {
        res.send('success update : ' + req.params.id_admin);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id_admin', req.params.id_admin)
      .del()
      .then(() => {
        res.send('success delete : ' + req.params.id_admin);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
