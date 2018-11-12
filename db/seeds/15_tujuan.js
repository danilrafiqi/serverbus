const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tujuan').del()
    .then(function () {
      // Inserts seed entries
      return knex('tujuan').insert([
        {id_tujuan: uuidv4(), nama: 'Bandung', lokasi_awal: 'Bandar Lampung', lokasi_tujuan: 'Malang'},
        {id_tujuan: uuidv4(), nama: 'Bandung', lokasi_awal: 'Bandar Lampung', lokasi_tujuan: 'Malang'},
        {id_tujuan: uuidv4(), nama: 'Bandung', lokasi_awal: 'Bandar Lampung', lokasi_tujuan: 'Malang'}
      ]);
    });
};
