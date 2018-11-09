const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kelas').del()
    .then(function () {
      // Inserts seed entries
      return knex('kelas').insert([
        {id_kelas: 'A1A', nama_kelas: 'Ekonomi', deskripsi: 'Ekonomi', harga: 'Rp. 250000'},
        {id_kelas: 'A2B', nama_kelas: 'Bisnis', deskrisi: 'Bisnis', harga: '375000'},
        {id_kelas: 'A3C', nama_kelas: 'Eksekutif', deskripsi: 'Eksekutif', harga: '435000'}
      ]);
    });
};
