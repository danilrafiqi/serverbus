const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jadwal')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('jadwal').insert([
        {
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf158',
          tanggal_keberangkatan: '2018-12-08',
          waktu_keberangkatan: '08:00:10',
          harga: '0',
          no_plat: 'BE4530PJ',
          id_rute: '8ed49b1c-9876-4992-8bec-df138488f789'
        },
        {
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159',
          tanggal_keberangkatan: '2018-12-08',
          waktu_keberangkatan: '13:00:10',
          harga: '0',
          no_plat: 'BE2222PJ',
          id_rute: '5470d2f6-04a8-4977-acb1-86ff815de2d5'
        },
        {
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf160',
          tanggal_keberangkatan: '2018-12-08',
          waktu_keberangkatan: '16:00:10',
          harga: '0',
          no_plat: 'BE1111PJ',
          id_rute: 'be2b45aa-21cc-4965-9fe7-ee5c8052959e'
        },
        {
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf169',
          tanggal_keberangkatan: '2018-12-08',
          waktu_keberangkatan: '20:00:10',
          harga: '0',
          no_plat: 'BE4531DM',
          id_rute: 'aa7fb3c3-2d41-41a7-95f8-2f24394f5a38'
        },
        {
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf179',
          tanggal_keberangkatan: '2018-12-08',
          waktu_keberangkatan: '05:00:10',
          harga: '0',
          no_plat: 'BE4532DM',
          id_rute: 'abe59240-54ad-44df-aa3e-1b4952103ed4'
        },
        {
          id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf189',
          tanggal_keberangkatan: '2018-12-08',
          waktu_keberangkatan: '09:00:10',
          harga: '0',
          no_plat: 'BE4533DM',
          id_rute: 'abe59240-54ad-44df-aa3e-1b4952103ed4'
        }
      ]);
    });
};
