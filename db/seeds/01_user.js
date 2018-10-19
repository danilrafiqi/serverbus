const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: uuidv4(), email: 'bellamifta289@gmail.com', password: '12345', foto: '12345', hak_akses: 'superadmin'},
        {id: uuidv4(), email: 'bella@gmail.com', password: '121212', foto: '11111', hak_akses: 'agen'}
      ]);
    });
};
