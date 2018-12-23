const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('po')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('po').insert([
        {
          id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d',
          kode: 'puspa',
          nama: 'Puspa Jaya Transport',
          alamat: 'Jl. Soekarno Hatta, Rajabasa',
          no_hp: '(0721)783111',
          email: 'puspajaya@gmail.com'
        },
        {
          id: 'e3259cc3-3ae6-4cad-a44d-65dc175f05d3',
          kode: 'damri',
          nama: 'Damri',
          alamat: 'Jl. Kapten Abdul Haq, Rajabasa',
          no_hp: '(0721)703088',
          email: 'damri@gmail.com'
        },
        {
          id: '936fa085-2d01-4713-a9cb-03a2809d5e95',
          kode: 'rosalia',
          nama: 'Rosalia Indah',
          alamat: 'Jl. Soekarno Hatta, Way Halim, Rajabasa',
          no_hp: '(0721)700611',
          email: 'rosaliaindah@gmail.com'
        },
        {
          id: '3ab51aac-f534-47e8-8184-f516077df3be',
          kode: 'als',
          nama: 'Antar Lintas Sumartera (ALS)',
          alamat: 'Jl. Kapten Abdul Haq No. 75, Rajabasa',
          no_hp: '(0721)748277',
          email: 'alsbus@gmail.com'
        },
        {
          id: 'eacf97d2-dcef-4ff8-80df-49271b0b3c42',
          kode: 'pkencana',
          nama: 'Pahala Kencana',
          alamat: 'Jl. Zainal Abidin Pagar Alam No. 28, Rajabasa',
          no_hp: '(0721)781363',
          email: 'pahalakencana@gmail.com'
        }
      ]);
    });
};
