const knex = require('../db/knex');
const table = 'bukti';
const multer = require('multer');
const uuidv4 = require('uuid/v4');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/bukti');
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
      .where('id', req.params.id)
      .then(datas => {
        res.send(datas);
      });
  },
  // upload: (req, res) => {},
  post: (req, res) => {
    const data = {
      id: uuidv4(),
      nama_pengirim: req.body.nama_pengirim,
      nama_bank_pengirim: req.body.nama_bank_pengirim,
      jumlah_transfer: req.body.jumlah_transfer,
      tiket_id: req.body.tiket_id,
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
  }
};
