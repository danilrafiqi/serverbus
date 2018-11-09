const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jadwal').del()
    .then(function () {
      // Inserts seed entries
      return knex('jadwal').insert([
        {id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159', awal: 'Way Halim', tujuan: 'Madiun', waktu: '10:00:10', harga: '435000', id_bus: 'BE4530CG', id_rute: 'PSP1'},
        {id_jadwal: 'c2a8af56-2868-4ec7-ab74-e6ee1356cdb8', awal: 'Kalianda', tujuan: 'Solo', waktu: '17:20:10', harga: '375000', id_bus: 'BE7980YG', id_rute: 'RSL1'},
        {id_jadwal: 'aa04545e-6b65-4e31-866f-dbb3895d74bc', awal: 'Bukit Kemuning', tujuan: 'Surabaya', waktu: '12:10:10', harga: '250000', id_bus: 'BE4530CG', id_rute: 'PSP1'}
      ]);
    });
};
