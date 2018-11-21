const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus').del()
    .then(function () {
      // Inserts seed entries
      return knex('bus').insert([
        {id_bus: 'BE4530CG', id_kelas: 'A1A'},
        {id_bus: 'BE7980YG', id_kelas: 'A2B'},
        {id_bus: 'BE2530YL', id_kelas: 'A3C'}
      ]);
    });
};
