const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transaksi').del()
    .then(function () {
      // Inserts seed entries
      return knex('transaksi').insert([
        {id_transaksi: uuidv4(), bukti_pembayaran: 'A01', status_transaksi: '', total: '', tgl_pesan: '', expired: '', id_pemesan: ''},
        {id_transaksi: uuidv4(), bukti_pembayaran: 'A02', status_transaksi: '', total: '', tgl_pesan: '', expired: '', id_pemesan: ''},
        {id_transaksi: uuidv4(), bukti_pembayaran: 'A03', status_transaksi: '', total: '', tgl_pesan: '', expired: '', id_pemesan: ''}
      ]);
    });
};
