const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('login')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('login').insert([
        {
          email: 'gedearya359@gmail.com',
          hak_akses: 'admin',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        },
        {
          email: 'denysaputra1333@gmail.com',
          hak_akses: 'manager_po',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        },
        {
          email: 'bellamifta289@gmail.com',
          hak_akses: 'manager',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        },
        {
          email: 'danil.rafiqi@gmail.com',
          hak_akses: 'superadmin',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        },
        {
          email: 'petugas@gmail.com',
          hak_akses: 'petugas',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        }
      ]);
    });
};
