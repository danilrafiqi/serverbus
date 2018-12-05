const knex = require('../db/knex');
const table = 'admin';
const knexDate = knex.fn.now();
const uuidv4 = require('uuid/v4');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({ storage: storage });

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
  unggah: upload.single('foto'),
  detail: (req, res) => {
    knex
      .select()
      .from(table)
      .where('id_admin', req.params.id_admin)
      .then(datas => {
        res.send(datas);
      });
  },
  // upload: (req, res) => {},
  post: (req, res) => {
    console.log('req file', req);
    const data = {
      id_admin: uuidv4(),
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      nama: req.body.nama,
      jenis_kelamin: req.body.jenis_kelamin,
      foto: req.file.path
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
      foto: req.file.path
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
