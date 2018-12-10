const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          id_user: 'f172b2b5-c4c9-47f4-893f-b44388e7f358',
          email: 'bellamifta289@gmail.com',
          password: '123456',
          foto: 'gede.jpg',
          no_hp: '088398293812',
          nama: 'Bella Miftha',
          jenis_kelamin: '',
          hak_akses: 'agen',
          id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id_user: '66781e2b-66ad-47d6-bab4-dd23d1e70c1e',
          email: 'bellamifta289@gmail.com',
          password: '123456',
          foto: 'gede.jpg',
          no_hp: '088398293812',
          nama: 'Bella Miftha',
          jenis_kelamin: '',
          hak_akses: 'agen',
          id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id_user: 'f80f6081-25a2-4e38-8bf4-bf9cea122922',
          email: 'dannil@gmail.com',
          password: '12345',
          foto: 'daniel.jpg',
          no_hp: '088398293814',
          nama: 'I Gede Arya',
          jenis_kelamin: 'l',
          hak_akses: 'superadmin',
          id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        }
      ]);
    });
};
