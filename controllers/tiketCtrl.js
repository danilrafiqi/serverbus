const knex = require('../db/knex');
const table = 'tiket';
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
      .where('id_tiket', req.params.id_tiket)
      .then(datas => {
        res.send(datas);
      });
  },

  post: (req, res) => {
    const data = {
      id_tiket: uuidv4(),
      no_kursi: req.body.no_kursi,
      tgl_pemesanan: req.body.tgl_pemesanan,
      waktu_pemesanan: req.body.waktu_pemesanan,
      id_harga: req.body.id_harga,
      id_jadwal: req.body.id_jadwal,
      id_penumpang: req.body.id_penumpang,
      updated_at: knexDate,
      id_transaksi: req.body.id_transaksi
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
      no_kursi: req.body.no_kursi,
      tgl_pemesanan: req.body.tgl_pemesanan,
      waktu_pemesanan: req.body.waktu_pemesanan,
      id_harga: req.body.id_harga,
      id_jadwal: req.body.id_jadwal,
      id_penumpang: req.body.id_penumpang,
      id_transaksi: req.body.id_transaksi
    };
    knex(table)
      .where('id_tiket', req.params.id_tiket)
      .update(data)
      .then(datas => {
        res.send('success update : ' + req.params.id_tiket);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },

  delete: (req, res) => {
    knex(table)
      .where('id_tiket', req.params.id_tiket)
      .del()
      .then(() => {
        res.send('success delete : ' + req.params.id_tiket);
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
