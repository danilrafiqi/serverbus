const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kursi').del()
    .then(function () {
      // Inserts seed entries
      return knex('kursi').insert([
        {id: '066b16c1-bded-4249-a8ed-8060cc7d9a81', kode: 'EKS', id_bus: '5ff6e6a1-1d80-4a9a-ab6b-a3406edb4c7a'},
        {id: '382444bf-948c-4e8b-9c46-1723db75b0ef', kode: 'EKN', id_bus: '24e2a8f1-0de3-42bf-9c37-19b181b9d4ad'},
        {id: '662a33b4-922b-4de5-bb8c-80ed5c559f16', kode: 'BSN', id_bus: '545fb427-af34-4e2b-9858-f57f7bfb0c68'}
      ]);
    });
};
