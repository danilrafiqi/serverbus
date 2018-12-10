const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kelas')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('kelas').insert([
        {
          id_kelas: '0a172198-297a-4365-ba01-c76c0cb2c893',
          nama_kelas: 'Ekonomi',
          deskripsi:
            '- konfigurasi kursi kanan 3 dan kiri 2-kapasitas penumpang maksimal 60 tempat duduk - pendingin udara (AC)-tanpa pengatur tempat duduk(RS)-tanpa toilet',
          harga: '0'
        },
        {
          id_kelas: 'dc934680-f861-4407-b02a-1cb296efb279',
          nama_kelas: 'Bisnis',
          deskripsi:
            'konfigurasi kursi kanan 2 dan kiri 2-kapasitas penumpang maksimal 40 tempat duduk- pendingin udara (AC)-terdapat pengatur tempat duduk (RS)- toilet',
          harga: '50000'
        },
        {
          id_kelas: 'e9fa8c5f-a25b-46fa-bad8-c709b6da8ace',
          nama_kelas: 'Eksekutif',
          deskripsi:
            'konfigurasi kursi kanan 2 dan kiri 2-kapasitas penumpang maksimal 25 tempat duduk- pendingin udara (AC)-terdapat pengatur tempat duduk (RS)- toilet',
          harga: '100000'
        }
      ]);
    });
};
