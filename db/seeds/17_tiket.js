const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tiket')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tiket').insert([
        {
          id_tiket: '8490e9fd-f759-4552-97f3-9f9b6e3c1f3e',
          tgl_pemesanan: '2018-12-07',
          waktu_pemesanan: '05:00:10',
          no_kursi: '1',
          id_harga: '843337b9-d2c5-40e9-b36f-408778164c7b',
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159',
          id_penumpang: '036420db-5656-4017-80d8-4e9d386424de',
          id_transaksi: 'c93b45f3-e493-4cc3-839a-b2e9f535a972'
        },
        {
          id_tiket: '3a1d3703-fea5-4810-b368-a002f13c3d67',
          tgl_pemesanan: '2018-12-07',
          waktu_pemesanan: '05:00:10',
          no_kursi: '2',
          id_harga: '843337b9-d2c5-40e9-b36f-408778164c7b',
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159',
          id_penumpang: 'bc786172-1df3-4eea-83b7-9fff36a4f5e9',
          id_transaksi: '5bd7d1ea-e8d1-4917-aaee-2cbcb1ed6ae8'
        },
        {
          id_tiket: '443200f4-1d83-42aa-b8c8-ecc10b2638a0',
          tgl_pemesanan: '2018-12-07',
          waktu_pemesanan: '05:00:10',
          no_kursi: '3',
          id_harga: '843337b9-d2c5-40e9-b36f-408778164c7b',
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159',
          id_penumpang: '5b1f8bb0-3a74-4e2c-9b2c-62ec5040434b',
          id_transaksi: '90c80d8a-b85d-47da-9d6f-fefa74fa5100'
        },
        {
          id_tiket: '94aaefbb-ac92-4b98-a4a7-7aa8d7bfa4b6',
          tgl_pemesanan: '2018-12-07',
          waktu_pemesanan: '05:00:10',
          no_kursi: '4',
          id_harga: '843337b9-d2c5-40e9-b36f-408778164c7b',
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159',
          id_penumpang: 'b10f0a8d-3dc3-4cd0-9c62-06102f590b23',
          id_transaksi: '5671bc1d-0468-4a7a-b3b0-216889e6c52a'
        }
      ]);
    });
};
