const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tiket').del()
    .then(function () {
      // Inserts seed entries
      return knex('tiket').insert([
        {id_tiket: uuidv4(), tanggal: '2018-10-26', status: 'kosong', expire: '2018-10-26 11:00:00', id_pemesan: '4c95c898-5933-4dea-bdbb-873900581031', id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159', id_kursi: '066b16c1-bded-4249-a8ed-8060cc7d9a81', id_agen: 'PSP-BDL'},
        {id_tiket: uuidv4(), tanggal: '2018-10-27', status: 'dipesan', expire: '2018-10-27 18:00:00', id_pemesan: 'f23b0d3e-dd0d-49d5-8a97-7d21d230c903', id_jadwal: 'c2a8af56-2868-4ec7-ab74-e6ee1356cdb8', id_kursi: '662a33b4-922b-4de5-bb8c-80ed5c559f16', id_agen: 'PSP-JKT'},
        {id_tiket: uuidv4(), tanggal: '2018-10-28', status: 'kosong', expire: '2018-10-28 14:00:00', id_pemesan: '66b14f89-bc5f-423d-813f-c3479fdd7411', id_jadwal: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159', id_kursi: '066b16c1-bded-4249-a8ed-8060cc7d9a81', id_agen: 'DMR-BDL'}
      ]);
    });
};
