const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('aturan').del()
    .then(function () {
      // Inserts seed entries
      return knex('aturan').insert([
        {id_aturan: '598d3c1b-d1b2-4087-b987-3103e427221b', aturan_ppn: 'ini aturan ppn', aturan_pembatalan: 'ini aturan pembatalan', aturan_penumpang: 'ini aturan penumpang', id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'},
        {id_aturan: 'bb4ca2df-96f9-4dcb-8fe7-819fee3d78cb', aturan_ppn: 'ini aturan ppn', aturan_pembatalan: 'ini aturan pembatalan', aturan_penumpang: 'ini aturan penumpang', id_po: 'e3259cc3-3ae6-4cad-a44d-65dc175f05d3'},
        {id_aturan: '756bab33-82ad-46fd-a1ef-2def07a1b23c', aturan_ppn: 'ini aturan ppn', aturan_pembatalan: 'ini aturan pembatalan', aturan_penumpang: 'ini aturan penumpang', id_po: '936fa085-2d01-4713-a9cb-03a2809d5e95'}
      ]);
    });
};




