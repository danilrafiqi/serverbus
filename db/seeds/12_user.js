const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 'f172b2b5-c4c9-47f4-893f-b44388e7f358',
          kode: 'puspa-1234',
          email: 'gede@gmail.com',
          username: 'danil',
          password: '123456',
          foto: 'gede.jpg',
          nama: 'Bella Miftha',
          jenis_kelamin: 'l',
          hak_akses: 'agen',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: '66781e2b-66ad-47d6-bab4-dd23d1e70c1e',
          kode: 'puspa-1235',
          email: 'bellamifta289@gmail.com',
          username: 'danils',
          password: '123456',
          foto: 'gede.jpg',
          nama: 'Bella Miftha',
          jenis_kelamin: 'l',
          hak_akses: 'agen',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: 'f80f6081-25a2-4e38-8bf4-bf9cea122922',
          kode: 'puspa-1236',
          email: 'dannil@gmail.com',
          username: 'danilx',
          password: '12345',
          foto: 'daniel.jpg',
          nama: 'I Gede Arya',
          jenis_kelamin: 'l',
          hak_akses: 'superadmin',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        }
      ]);
    });
};
