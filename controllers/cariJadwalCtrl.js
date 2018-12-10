const knex = require('../db/knex');
const table = 'harga';
const knexDate = knex.fn.now();
//const uuidv4 = require('uuid/v4');

module.exports = {
  detail: (req, res) => {
    knex
      .select(
        'harga.harga as harga',
        'tujuan.lokasi_awal as lokasi_awal',
        'tujuan.lokasi_tujuan as lokasi_tujuan',
        'agen.nama as nama_agen',
        'po.nama as nama_po',
        'rute.nama as nama_rute',
        'rute.deskripsi as deskripsi_rute',
        'jadwal.id_jadwal as id_jadwal',
        'jadwal.tanggal_keberangkatan as tanggal_keberangkatan',
        'jadwal.waktu_keberangkatan as waktu_keberangkatan',
        'jadwal.no_plat as no_plat',
        'bus.jumlah_kursi as jumlah_kursi',
        'bus.tipe_kursi as tipe_kursi',
        'kelas.nama_kelas as nama_kelas'
      )
      .from(table)
      .innerJoin('tujuan', 'harga.id_tujuan', '=', 'tujuan.id_tujuan')
      .innerJoin('agen', 'harga.id_agen', '=', 'agen.id_agen')
      .innerJoin('po', 'po.id_po', '=', 'agen.id_po')
      .innerJoin('rute', 'harga.id_rute', '=', 'rute.id_rute')
      .innerJoin('jadwal', 'jadwal.id_rute', '=', 'rute.id_rute')
      .innerJoin('bus', 'jadwal.no_plat', '=', 'bus.no_plat')
      .innerJoin('kelas', 'bus.id_kelas', '=', 'kelas.id_kelas')
      .where({
        'jadwal.tanggal_keberangkatan': req.query.tanggal_keberangkatan,
        'tujuan.lokasi_awal': req.query.lokasi_awal,
        'tujuan.lokasi_tujuan': req.query.lokasi_tujuan
      })
      //tambahin where biar tidak bisa serch jadwal yang udah lewat tanggalnya atau di ubah di form input tanggal keberangkatan
      .then(datas => {
        res.send(datas);
      });
  }
};
