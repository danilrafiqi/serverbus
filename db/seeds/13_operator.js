const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('operator')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('operator').insert([
        {
          id: '255f4c32-5678-1234-8cf2-f75c32fcf158',
          email: 'gedearya359@gmail.com',
          nama: 'I Gede Arya',
          jenis_kelamin: 'l',
          foto: 'default.jpg',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: '255f4c32-5678-4321-8cf2-f75c32fcf158',
          email: 'denysaputra1333@gmail.com',
          nama: 'Deni Saputra',
          jenis_kelamin: 'l',
          foto: 'default.jpg',
          po_id: '3ab51aac-f534-47e8-8184-f516077df3be'
        },
        {
          id: '255f4c32-5678-4321-8cf2-f75c32fcf159',
          email: 'petugas@gmail.com',
          nama: 'Petugas',
          jenis_kelamin: 'l',
          foto: 'default.jpg',
          po_id: '3ab51aac-f534-47e8-8184-f516077df3be'
        }
      ]);
    });
};
