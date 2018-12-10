const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('bus').insert([
        {
          no_plat: 'BE4530PJ',
          status: 'Siap',
          jumlah_kursi: '60',
          id_kelas: '0a172198-297a-4365-ba01-c76c0cb2c893',
          id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          no_plat: 'BE2222PJ',
          status: 'Siap',
          jumlah_kursi: '40',
          id_kelas: 'dc934680-f861-4407-b02a-1cb296efb279',
          id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          no_plat: 'BE1111PJ',
          status: 'Siap',
          jumlah_kursi: '25',
          id_kelas: 'e9fa8c5f-a25b-46fa-bad8-c709b6da8ace',
          id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          no_plat: 'BE4531DM',
          status: 'Siap',
          jumlah_kursi: '60',
          id_kelas: '0a172198-297a-4365-ba01-c76c0cb2c893',
          id_po: 'e3259cc3-3ae6-4cad-a44d-65dc175f05d3'
        },
        {
          no_plat: 'BE4532DM',
          status: 'Siap',
          jumlah_kursi: '40',
          id_kelas: 'dc934680-f861-4407-b02a-1cb296efb279',
          id_po: 'e3259cc3-3ae6-4cad-a44d-65dc175f05d3'
        },
        {
          no_plat: 'BE4533DM',
          status: 'Siap',
          jumlah_kursi: '25',
          id_kelas: 'e9fa8c5f-a25b-46fa-bad8-c709b6da8ace',
          id_po: 'e3259cc3-3ae6-4cad-a44d-65dc175f05d3'
        }
      ]);
    });
};
