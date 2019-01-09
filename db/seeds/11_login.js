const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('login')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('login').insert([
        {
          email: 'gede@gmail.com',
          hak_akses: 'admin',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        },
        {
          email: 'deni@gmail.com',
          hak_akses: 'manager_po',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        },
        {
          email: 'bellamiftha280@gmail.com',
          hak_akses: 'manager',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        },
        {
          email: 'danil.rafiqi@gmail.com',
          hak_akses: 'superadmin',
          password:
            '8e3ecf2e6beb1dfb08c9fa612792d4fbf4558301719ef1a17ff4558295d96faa'
        }
      ]);
    });
};
