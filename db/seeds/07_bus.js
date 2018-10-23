const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus').del()
    .then(function () {
      // Inserts seed entries
      return knex('bus').insert([
        {id: '5ff6e6a1-1d80-4a9a-ab6b-a3406edb4c7a', plat: 'BE 4530 CG', id_kelas: '43bfc5a5-6112-4e22-8847-0982e270a653'},
        {id: '24e2a8f1-0de3-42bf-9c37-19b181b9d4ad', plat: 'BE 7980 YG', id_kelas: '3d971bf7-203b-45dd-a85b-bd679246c92f'},
        {id: '545fb427-af34-4e2b-9858-f57f7bfb0c68', plat: 'BE 2530 YL', id_kelas: 'fe39c816-2538-43f3-b01c-06e19554d79d'}
      ]);
    });
};
