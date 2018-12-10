const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tujuan')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tujuan').insert([
        {
          id_tujuan: 'f6827d41-ef39-4349-b268-6ac3e1403a3c',
          nama: 'Bandar Lampung – Jakarta',
          lokasi_awal: 'Bandar Lampung',
          lokasi_tujuan: 'Jakarta'
        },
        {
          id_tujuan: '00f185d8-979a-40f9-877e-07cdc237a99e',
          nama: 'Bandar Lampung – Bogor',
          lokasi_awal: 'Bandar Lampung',
          lokasi_tujuan: 'Bogor'
        },
        {
          id_tujuan: '42a4a3d7-ca5f-40b7-9d38-01670cadcdde',
          nama: 'Bandar Lampung – Bandung',
          lokasi_awal: 'Bandar Lampung',
          lokasi_tujuan: 'Bandung'
        },
        {
          id_tujuan: '0a1adbb6-0a91-419a-a3b0-67a44e161e22',
          nama: 'Bandar Lampung – Malang',
          lokasi_awal: 'Bandar Lampung',
          lokasi_tujuan: 'Malang'
        },
        {
          id_tujuan: 'ce9ec03d-7b95-4fea-b23a-8f32ac878560',
          nama: 'Bandar Lampung – Jogjakarta',
          lokasi_awal: 'Bandar Lampung',
          lokasi_tujuan: 'Jogjakarta'
        },
        {
          id_tujuan: 'fe6cd780-e0ae-49fc-8b3a-bdccec77c462',
          nama: 'Bandar Lampung – Bali',
          lokasi_awal: 'Bandar Lampung',
          lokasi_tujuan: 'Bali'
        }
      ]);
    });
};
