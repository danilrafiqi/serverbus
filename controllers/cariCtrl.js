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
    // knex
    //   .select()
    //   .from('carijadwal')
    //   .where({
    //     pemberangkatan: 'Bandar Lampung',
    //     pemberhentian: 'Kebumen'
    //   })
    //   .andWhere(function() {
    //     this.where('tanggal_keberangkatan', 'like', `2019-01-20%`);
    //   })
    //   //tambahin where biar tidak bisa serch jadwal yang udah lewat tanggalnya atau di ubah di form input tanggal keberangkatan
    //   .then(datas => {
    //     console.log('brgkt', req.query.pemberangkatan);
    //     console.log('brnti', req.query.pemberhentian);
    //     console.log('tgl', req.query.tanggal_keberangkatan);
    //     console.log('daa', datas);
    //     res.send(datas);
    //   });

    // query with raw query
    knex
      .raw(
        `
    SELECT * FROM carijadwal WHERE tanggal_keberangkatan like '${
      req.query.tanggal_keberangkatan
    }%' and pemberangkatan like '${
          req.query.pemberangkatan
        }' and pemberhentian like '${req.query.pemberhentian}'
    `
      )
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
  },
  tiket: (req, res) => {
    knex
      .select()
      .from('cektiket')
      .where('book_id', 'like', `${req.query.bookId}`)
      .then(datas => {
        res.send(datas);
      });
  }
};
