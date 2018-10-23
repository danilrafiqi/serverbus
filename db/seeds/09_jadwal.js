const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jadwal').del()
    .then(function () {
      // Inserts seed entries
      return knex('jadwal').insert([
        {id: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159', awal: 'Way Halim', tujuan: 'Madiun', waktu: '10:00:10', harga: '435000', id_bus: '24e2a8f1-0de3-42bf-9c37-19b181b9d4ad', id_rute: 'db3b9dce-740d-4589-90d3-1d51d36079ff'},
        {id: 'c2a8af56-2868-4ec7-ab74-e6ee1356cdb8', awal: 'Kalianda', tujuan: 'Solo', waktu: '17:20:10', harga: '375000', id_bus: '545fb427-af34-4e2b-9858-f57f7bfb0c68', id_rute: '9723597e-a0b4-4c7e-b251-4221b98f18e5'},
        {id: 'aa04545e-6b65-4e31-866f-dbb3895d74bc', awal: 'Bukit Kemuning', tujuan: 'Surabaya', waktu: '12:10:10', harga: '250000', id_bus: '24e2a8f1-0de3-42bf-9c37-19b181b9d4ad', id_rute: '0eb6f0f8-7f40-4640-bd28-eb0cffeb3625'}
      ]);
    });
};
