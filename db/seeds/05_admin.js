const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('admin').insert([
        {
          id_admin: '39a69d42-57bd-4c52-a775-b58c91e1c611',
          username: 'gede',
          password: '123456',
          email: 'gede@gmail.com',
          jenis_kelamin: 'l',
          foto: 'gede.jpg'
        },
        {
          id_admin: '2fbd8308-add2-4091-a245-00492241bd73',
          username: 'bella',
          password: '123456',
          email: 'bella@gmail.com',
          jenis_kelamin: 'p',
          foto: 'bella.jpg'
        },
        {
          id_admin: 'cfe1e8f4-65e9-4c6c-ab63-272ad0843d04',
          username: 'danniel',
          password: '123456',
          email: 'danniel@gmail.com',
          jenis_kelamin: 'l',
          foto: 'danniel.jpg'
        },
        {
          id_admin: 'c55d8366-9c52-482b-a0a6-964db1d43967',
          username: 'deni',
          password: '123456',
          email: 'deni@gmail.com',
          jenis_kelamin: 'l',
          foto: 'deni.jpg'
        }
      ]);
    });
};
