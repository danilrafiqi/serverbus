const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transaksi').del()
    .then(function () {
      // Inserts seed entries
      return knex('transaksi').insert([
        {
          id_transaksi: 'c93b45f3-e493-4cc3-839a-b2e9f535a972', 
          bukti_pembayaran: 'c93b45f3-e493-4cc3-839a-b2e9f535a972.jpg', 
          status_transaksi: 'lunas', 
          total: '230000', 
          tgl_pesan: '2018-12-07 09:11:00', 
          expired: '2018-12-07 10:11:00', 
          id_pemesan: '4c95c898-5933-4dea-bdbb-873900581031'
        },
        {
          id_transaksi: '5bd7d1ea-e8d1-4917-aaee-2cbcb1ed6ae8', 
          bukti_pembayaran: '5bd7d1ea-e8d1-4917-aaee-2cbcb1ed6ae8.jpg', 
          status_transaksi: 'lunas', 
          total: '250000', 
          tgl_pesan: '2018-12-07 09:11:00', 
          expired: '2018-12-07 10:11:00', 
          id_pemesan: '8e5632d0-e34e-4961-991c-cd2597eca4d4'
        },
        {
          id_transaksi: '90c80d8a-b85d-47da-9d6f-fefa74fa5100', 
          bukti_pembayaran: '90c80d8a-b85d-47da-9d6f-fefa74fa5100.jpg', 
          status_transaksi: 'lunas', 
          total: '260000', 
          tgl_pesan: '2018-12-07 09:11:00', 
          expired: '2018-12-07 10:11:00', 
          id_pemesan: 'e264f13c-dd3b-4b81-b346-dd33d2447915'
        },
        {
          id_transaksi: '5671bc1d-0468-4a7a-b3b0-216889e6c52a', 
          bukti_pembayaran: '5671bc1d-0468-4a7a-b3b0-216889e6c52a.jpg', 
          status_transaksi: 'lunas', 
          total: '230.000', 
          tgl_pesan: '2018-12-07 09:11:00', 
          expired: '2018-12-07 10:11:00', 
          id_pemesan: 'f23b0d3e-dd0d-49d5-8a97-7d21d230c903'
        }
        
      ]);
    });
};