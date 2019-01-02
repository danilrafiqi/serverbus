const knex = require('../db/knex');
const table = 'regencies';
const knexDate = knex.fn.now();
//const uuidv4 = require('uuid/v4');

module.exports = {
  kabupaten: (req, res) => {
    knex
      .select()
      .from(table)
      //tambahin where biar tidak bisa serch jadwal yang udah lewat tanggalnya atau di ubah di form input tanggal keberangkatan
      .then(datas => {
        res.send(datas);
      });
  },
  jadwal: (req, res) => {
    knex
      .select()
      .from('carijadwal')
      .where({
        pemberangkatan: req.query.pemberangkatan,
        pemberhentian: req.query.pemberhentian
      })
      .andWhere(function() {
        this.where(
          'tanggal_keberangkatan',
          'like',
          `${req.query.tanggal_keberangkatan}%`
        );
      })
      //tambahin where biar tidak bisa serch jadwal yang udah lewat tanggalnya atau di ubah di form input tanggal keberangkatan
      .then(datas => {
        res.send(datas);
      });
  },
  kursi: (req, res) => {
    knex
      .select()
      .from('carikursi')
      .where('jadwal', 'like', `${req.params.jadwal}`)
      .where(
        'tanggal_keberangkatan',
        'like',
        `${req.params.tanggal_keberangkatan}%`
      )
      //tambahin where biar tidak bisa serch jadwal yang udah lewat tanggalnya atau di ubah di form input tanggal keberangkatan
      .then(datas => {
        res.send(datas);
      });
  },
  jadwalById: (req, res) => {
    knex
      .select()
      .from('carijadwal')
      .where('id', 'like', `${req.params.id}`)
      .then(datas => {
        res.send(datas);
      });
  }
};
