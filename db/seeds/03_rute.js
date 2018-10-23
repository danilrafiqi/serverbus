const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rute').del()
    .then(function () {
      // Inserts seed entries
      return knex('rute').insert([
        {id: '02bc2161-27d5-4e6a-a953-d7f61e33e437', kode: 'PSP1', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Jakarta'},
        {id: 'db3b9dce-740d-4589-90d3-1d51d36079ff', kode: 'RSL1', deskripsi: 'Bandar Lampung - Tol Cipali - Purwokerto - Kebumen - Yogyakarta - Solo (Surakarta)'},
        {id: '9723597e-a0b4-4c7e-b251-4221b98f18e5', kode: 'PSP2', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Bandung'},
        {id: '0eb6f0f8-7f40-4640-bd28-eb0cffeb3625', kode: 'RSL2', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Jakarta - Bekasi - Tol Cipali - Brebes - Tegal - Pemalang - Pekalongan - Kendal Batang - Semarang'},
        {id: '6251048d-2e66-49fc-8330-4b0f8c8c714e', kode: 'RSL3', deskripsi: 'Bandar Lampung - Bakauheni - Merak - Tol Cikampek - Tol Padaleunyi - Tasikmalaya'}
      ]);
    });
};
