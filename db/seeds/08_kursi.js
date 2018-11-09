const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kursi').del()
    .then(function () {
      // Inserts seed entries
      return knex('kursi').insert([
        {id_kursi: '066b16c1-bded-4249-a8ed-8060cc7d9a81', kode: '1', id_bus: 'BE4530CG'},
        {id_kursi: '382444bf-948c-4e8b-9c46-1723db75b0ef', kode: '2', id_bus: 'BE7980YG'},
        {id_kursi: '662a33b4-922b-4de5-bb8c-80ed5c559f16', kode: '3', id_bus: 'BE4530CG'}
      ]);
    });
};
