const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kelas')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('kelas').insert([
        {
          id: '0a172198-297a-4365-ba01-c76c0cb2c893',
          nama: 'Ekonomi',
          deskripsi: '# AC',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: 'dc934680-f861-4407-b02a-1cb296efb279',
          nama: 'Bisnis',
          deskripsi: '# AC \n# Selimut \n# Toilet',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: 'e9fa8c5f-a25b-46fa-bad8-c709b6da8ace',
          nama: 'Eksekutif',
          deskripsi: '# AC \n# Selimut \n# Snack \n# Makan \n# Toilet',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        }
      ]);
    });
};
