const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rute')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('rute').insert([
        {
          id: '8ed49b1c-9876-4992-8bec-df138488f789',
          deskripsi: 'Bandar Lampung - Bakauheni - Merak - Jakarta',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: '5470d2f6-04a8-4977-acb1-86ff815de2d5',
          deskripsi:
            'Bandar Lampung - Tol Cipali - Purwokerto - Kebumen - Yogyakarta - Solo (Surakarta)',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: 'be2b45aa-21cc-4965-9fe7-ee5c8052959e',
          deskripsi: 'Bandar Lampung - Bakauheni - Merak - Bandung',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: 'aa7fb3c3-2d41-41a7-95f8-2f24394f5a38',
          deskripsi:
            'Bandar Lampung - Bakauheni - Merak - Jakarta - Bekasi - Tol Cipali - Brebes - Tegal - Pemalang - Pekalongan - Kendal Batang - Semarang',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        },
        {
          id: 'abe59240-54ad-44df-aa3e-1b4952103ed4',
          deskripsi:
            'Bandar Lampung - Bakauheni - Merak - Tol Cikampek - Tol Padaleunyi - Tasikmalaya',
          po_id: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'
        }
      ]);
    });
};
