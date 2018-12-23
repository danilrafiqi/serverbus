const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tujuan')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tujuan').insert([
        {
          id: 'f6827d41-ef39-4349-b268-6ac3e1403a3c',
          pemberangkatan: 'Bandar Lampung',
          pemberhentian: 'Jakarta',
          rute_id: '8ed49b1c-9876-4992-8bec-df138488f789'
        },
        {
          id: '00f185d8-979a-40f9-877e-07cdc237a99e',
          pemberangkatan: 'Bandar Lampung',
          pemberhentian: 'Kebumen',
          rute_id: '5470d2f6-04a8-4977-acb1-86ff815de2d5'
        },
        {
          id: '42a4a3d7-ca5f-40b7-9d38-01670cadcdde',
          pemberangkatan: 'Bandar Lampung',
          pemberhentian: 'Bandung',
          rute_id: 'be2b45aa-21cc-4965-9fe7-ee5c8052959e'
        },
        {
          id: '0a1adbb6-0a91-419a-a3b0-67a44e161e22',
          pemberangkatan: 'Bandar Lampung',
          pemberhentian: 'Bekasi',
          rute_id: 'aa7fb3c3-2d41-41a7-95f8-2f24394f5a38'
        },
        {
          id: 'ce9ec03d-7b95-4fea-b23a-8f32ac878560',
          pemberangkatan: 'Bandar Lampung',
          pemberhentian: 'Jogjakarta',
          rute_id: '5470d2f6-04a8-4977-acb1-86ff815de2d5'
        },
        {
          id: 'fe6cd780-e0ae-49fc-8b3a-bdccec77c462',
          pemberangkatan: 'Bandar Lampung',
          pemberhentian: 'Semarang',
          rute_id: 'aa7fb3c3-2d41-41a7-95f8-2f24394f5a38'
        }
      ]);
    });
};
