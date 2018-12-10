const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agen')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('agen').insert([
        {
          id_agen: '326b74fa-0c23-4203-8c78-e27082d3605d',
          nama: 'Puspa Jaya BDL',
          lokasi: 'Bandar Lampung',
          no_hp: '0845678988',
          id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id_agen: '6cc588b2-9de4-4a92-8ab8-681252d9d5ff',
          nama: 'Pahala Kencana',
          lokasi: 'Bandar Lampung',
          no_hp: '08453333211',
          id_po: 'eacf97d2-dcef-4ff8-80df-49271b0b3c42'
        },
        {
          id_agen: '1a2119e4-e2d5-44a6-84b8-8289dc0f90a7',
          nama: 'Damri BDL',
          lokasi: 'Bandar Lampung',
          no_hp: '087643211',
          id_po: 'e3259cc3-3ae6-4cad-a44d-65dc175f05d3'
        },
        {
          id_agen: '8657e853-fa31-4b4b-ad8e-8d0d42b2a769',
          nama: 'Rosalia Indah BDL',
          lokasi: 'Bandar Lampung',
          no_hp: '087643213',
          id_po: '936fa085-2d01-4713-a9cb-03a2809d5e95'
        },
        {
          id_agen: '54c76115-0e38-499e-9ff7-7eb48deef134',
          nama: 'Antar Lintas Sumartera (ALS) BDL',
          lokasi: 'Bandar Lampung',
          no_hp: '089934218890',
          id_po: '3ab51aac-f534-47e8-8184-f516077df3be'
        }
      ]);
    });
};
