const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rute')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('rute').insert([
        {
          id: '8ed49b1c-9876-4992-8bec-df138488f789',
          kode: 'bdlbmjkt',
          deskripsi: 'Bandar Lampung - Bakauheni - Merak - Jakarta'
        },
        {
          id: '5470d2f6-04a8-4977-acb1-86ff815de2d5',
          kode: 'bdlpkysl',
          deskripsi:
            'Bandar Lampung - Tol Cipali - Purwokerto - Kebumen - Yogyakarta - Solo (Surakarta)'
        },
        {
          id: 'be2b45aa-21cc-4965-9fe7-ee5c8052959e',
          kode: 'bdlbmbdg',
          deskripsi: 'Bandar Lampung - Bakauheni - Merak - Bandung'
        },
        {
          id: 'aa7fb3c3-2d41-41a7-95f8-2f24394f5a38',
          kode: 'bdljbsmg',
          deskripsi:
            'Bandar Lampung - Bakauheni - Merak - Jakarta - Bekasi - Tol Cipali - Brebes - Tegal - Pemalang - Pekalongan - Kendal Batang - Semarang'
        },
        {
          id: 'abe59240-54ad-44df-aa3e-1b4952103ed4',
          kode: 'bdlbmtsk',
          deskripsi:
            'Bandar Lampung - Bakauheni - Merak - Tol Cikampek - Tol Padaleunyi - Tasikmalaya'
        }
      ]);
    });
};
