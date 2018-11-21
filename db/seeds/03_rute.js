const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rute').del()
    .then(function () {
      // Inserts seed entries
      return knex('rute').insert([
        {id_rute: 'PSP1', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Jakarta'},
        {id_rute: 'RSL1', deskripsi: 'Bandar Lampung - Tol Cipali - Purwokerto - Kebumen - Yogyakarta - Solo (Surakarta)'},
        {id_rute: 'PSP2', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Bandung'},
        {id_rute: 'RSL2', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Jakarta - Bekasi - Tol Cipali - Brebes - Tegal - Pemalang - Pekalongan - Kendal Batang - Semarang'},
        {id_rute: 'RSL3', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Tol Cikampek - Tol Padaleunyi - Tasikmalaya'}
      ]);
    });
};
