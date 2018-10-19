const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rute').del()
    .then(function () {
      // Inserts seed entries
      return knex('rute').insert([
        {id: uuidv4(), kode: 'rowValue1', deskripsi: 'rowValue1'},
        {id: uuidv4(), kode: 'rowValue1', deskripsi: 'rowValue1'}
      ]);
    });
};
