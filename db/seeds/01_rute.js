const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rute').del()
    .then(function () {
      // Inserts seed entries
      return knex('rute').insert([
        {id_rute: '8ed49b1c-9876-4992-8bec-df138488f789', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Jakarta', lama_keberangkatan: '12'},
        {id_rute: '5470d2f6-04a8-4977-acb1-86ff815de2d5', deskripsi: 'Bandar Lampung - Tol Cipali - Purwokerto - Kebumen - Yogyakarta - Solo (Surakarta)', lama_keberangkatan: '18'},
        {id_rute: 'be2b45aa-21cc-4965-9fe7-ee5c8052959e', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Bandung', lama_keberangkatan: '12'},
        {id_rute: 'aa7fb3c3-2d41-41a7-95f8-2f24394f5a38', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Jakarta - Bekasi - Tol Cipali - Brebes - Tegal - Pemalang - Pekalongan - Kendal Batang - Semarang', lama_keberangkatan: '24'},
        {id_rute: 'abe59240-54ad-44df-aa3e-1b4952103ed4', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Tol Cikampek - Tol Padaleunyi - Tasikmalaya',, lama_keberangkatan: '36'}
      ]);
    });
};









