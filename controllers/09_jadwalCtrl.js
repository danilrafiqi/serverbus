const knex = require('../db/knex');
const table = 'jadwal';
const knexDate = knex.fn.now();
const uuidv4 = require('uuid/v4');

module.exports = {
  all: (req, res) => {
    knex
      .select(
        'jadwal.*',
        'bus.plat as bus',
        'tujuan.pemberangkatan as tujuan_pemberangkatan',
        'tujuan.pemberhentian as tujuan_pemberhentian'
      )
      .from(table)
      .innerJoin('bus', 'jadwal.bus_id', '=', 'bus.id')
      .innerJoin('tujuan', 'jadwal.tujuan_id', '=', 'tujuan.id')
      .orderBy('jadwal.created_at', 'desc')
      .then(datas => {
        res.send(datas);
      });
  },

  allByPo: (req, res) => {
    knex
      .select(
        'jadwal.*',
        'bus.plat as bus',
        'tujuan.pemberangkatan as tujuan_pemberangkatan',
        'tujuan.pemberhentian as tujuan_pemberhentian',
        'kelas.po_id as po_id'
      )
      .from(table)
      .innerJoin('bus', 'jadwal.bus_id', '=', 'bus.id')
      .innerJoin('tujuan', 'jadwal.tujuan_id', '=', 'tujuan.id')
      .innerJoin('kelas', 'bus.kelas_id', '=', 'kelas.id')
      .orderBy('jadwal.created_at', 'desc')
      .where('po_id', req.params.po_id)
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
      harga: req.body.harga,
      kursi_tersedia: req.body.kursi_tersedia,
      tanggal_keberangkatan: req.body.tanggal_keberangkatan,
      bus_id: req.body.bus_id,
      tujuan_id: req.body.tujuan_id
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
      harga: req.body.harga,
      kursi_tersedia: req.body.kursi_tersedia,
      tanggal_keberangkatan: req.body.tanggal_keberangkatan,
      bus_id: req.body.bus_id,
      tujuan_id: req.body.tujuan_id,
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
        res.send({ message: 'success' });
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
