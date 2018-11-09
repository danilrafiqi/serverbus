const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('aturan').del()
    .then(function () {
      // Inserts seed entries
      return knex('aturan').insert([
        {id_aturan: uuidv4(), aturan_ppn: 'ini aturan ppn', aturan_pembatalan: 'ini aturan pembatalan', aturan_penumpang: 'ini aturan penumpang'},
        {id_aturan: uuidv4(), aturan_ppn: 'ini aturan ppn', aturan_pembatalan: 'ini aturan pembatalan', aturan_penumpang: 'ini aturan penumpang'},
        {id_aturan: uuidv4(), aturan_ppn: 'ini aturan ppn', aturan_pembatalan: 'ini aturan pembatalan', aturan_penumpang: 'ini aturan penumpang'}
      ]);
    });
};
