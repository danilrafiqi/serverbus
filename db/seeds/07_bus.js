const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('bus').insert([
        {
          id: '0a172198-297a-4365-ba01-19ab0cb2c893',
          plat: 'BE4530PJ',
          jumlah_kursi: '25',
          kelas_id: '0a172198-297a-4365-ba01-c76c0cb2c893'
        },
        {
          id: '1a172198-297a-4365-ba01-19ab0cb2c893',
          plat: 'BE2222PJ',
          jumlah_kursi: '25',
          kelas_id: 'dc934680-f861-4407-b02a-1cb296efb279'
        },
        {
          id: '2a172198-297a-4365-ba01-19ab0cb2c893',
          plat: 'BE1111PJ',
          jumlah_kursi: '25',
          kelas_id: 'e9fa8c5f-a25b-46fa-bad8-c709b6da8ace'
        },
        {
          id: '3a172198-297a-4365-ba01-19ab0cb2c893',
          plat: 'BE4531DM',
          jumlah_kursi: '25',
          kelas_id: '0a172198-297a-4365-ba01-c76c0cb2c893'
        },
        {
          id: '4a172198-297a-4365-ba01-19ab0cb2c893',
          plat: 'BE4532DM',
          jumlah_kursi: '25',
          kelas_id: 'dc934680-f861-4407-b02a-1cb296efb279'
        },
        {
          id: '5a172198-297a-4365-ba01-19ab0cb2c893',
          plat: 'BE4533DM',
          jumlah_kursi: '25',
          kelas_id: 'e9fa8c5f-a25b-46fa-bad8-c709b6da8ace'
        }
      ]);
    });
};
