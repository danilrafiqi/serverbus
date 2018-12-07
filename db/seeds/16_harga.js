const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('harga').del()
    .then(function () {
      // Inserts seed entries
      return knex('harga').insert([
        {
          id_harga: '843337b9-d2c5-40e9-b36f-408778164c7b', 
          id_rute: '8ed49b1c-9876-4992-8bec-df138488f789', 
          id_tujuan: 'f6827d41-ef39-4349-b268-6ac3e1403a3c', 
          id_agen: '230000'
        },
        {
          id_harga: '1d0d8afe-ff97-41cb-a757-569042188e94', 
          id_rute: '8ed49b1c-9876-4992-8bec-df138488f789', 
          id_tujuan: '00f185d8-979a-40f9-877e-07cdc237a99e', 
          id_agen: '250000'
        },
        {
          id_harga: '6f34a743-d1fa-4731-8eb5-fad68df9779f', 
          id_rute: '8ed49b1c-9876-4992-8bec-df138488f789', 
          id_tujuan: '42a4a3d7-ca5f-40b7-9d38-01670cadcdde', 
          id_agen: '260000'
        },
        {
          id_harga: '55b61d6e-d1cc-4a47-8b91-dd9e76934e1f', 
          id_rute: '8ed49b1c-9876-4992-8bec-df138488f789', 
          id_tujuan: '0a1adbb6-0a91-419a-a3b0-67a44e161e22', 
          id_agen: '300000'
        },
        {
          id_harga: 'bfa40f40-2421-42db-8d87-601533837840', 
          id_rute: '8ed49b1c-9876-4992-8bec-df138488f789', 
          id_tujuan: 'ce9ec03d-7b95-4fea-b23a-8f32ac878560', 
          id_agen: '350000'
        },
        {
          id_harga: 'ccea1314-a681-442d-a665-58a245899d9d', 
          id_rute: '8ed49b1c-9876-4992-8bec-df138488f789', 
          id_tujuan: 'fe6cd780-e0ae-49fc-8b3a-bdccec77c462', 
          id_agen: '500000'
        }
        
      ]);
    });
};
