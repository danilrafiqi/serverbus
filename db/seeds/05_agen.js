const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agen')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('agen').insert([
        {
          id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d',
          nama: 'Puspa Jaya Cabang Bandar Lampung',
          alamat: 'Jl. Soekarno Hatta, Rajabasa',
          no_hp: '(0721)783111',
          email: 'puspajaya@gmail.com',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: 'e3259cc3-3ae6-4cad-a44d-65dc175f05d3',
          nama: 'Damri Cabang Bandar Lampung',
          alamat: 'Jl. Kapten Abdul Haq, Rajabasa',
          no_hp: '(0721)703088',
          email: 'damri@gmail.com',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: '936fa085-2d01-4713-a9cb-03a2809d5e95',
          nama: 'Rosalia Indah Cabang Bandar Lampung',
          alamat: 'Jl. Soekarno Hatta, Way Halim, Rajabasa',
          no_hp: '(0721)700611',
          email: 'rosaliaindah@gmail.com',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: '3ab51aac-f534-47e8-8184-f516077df3be',
          nama: 'Antar Lintas Sumartera (ALS) Cabang Bandar Lampung',
          alamat: 'Jl. Kapten Abdul Haq No. 75, Rajabasa',
          no_hp: '(0721)748277',
          email: 'alsbus@gmail.com',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: 'eacf97d2-dcef-4ff8-80df-49271b0b3c42',
          nama: 'Pahala Kencana Cabang Bandar Lampung',
          alamat: 'Jl. Zainal Abidin Pagar Alam No. 28, Rajabasa',
          no_hp: '(0721)781363',
          email: 'pahalakencana@gmail.com',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        }
      ]);
    });
};
