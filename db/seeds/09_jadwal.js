const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jadwal')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('jadwal').insert([
        {
          id: '255f4c32-e44f-4a2c-8cf2-f75c32fcf158',
          harga: '200000',
          kursi_tersedia: '20',
          tanggal_keberangkatan: '2019-01-02 09:00:00',
          bus_id: '0a172198-297a-4365-ba01-19ab0cb2c893',
          tujuan_id: 'f6827d41-ef39-4349-b268-6ac3e1403a3c'
        },
        {
          id: '255f4c32-e44f-4a2c-8cf2-f75c32fcf159',
          harga: '200000',
          kursi_tersedia: '20',
          tanggal_keberangkatan: '2019-01-02 09:00:00',
          bus_id: '0a172198-297a-4365-ba01-19ab0cb2c893',
          tujuan_id: 'f6827d41-ef39-4349-b268-6ac3e1403a3c'
        },
        {
          id: '255f4c32-e44f-4a2c-8cf2-f75c32fcf160',
          harga: '200000',
          kursi_tersedia: '20',
          tanggal_keberangkatan: '2019-01-02 09:00:00',
          bus_id: '0a172198-297a-4365-ba01-19ab0cb2c893',
          tujuan_id: 'f6827d41-ef39-4349-b268-6ac3e1403a3c'
        },
        {
          id: '255f4c32-e44f-4a2c-8cf2-f75c32fcf169',
          harga: '200000',
          kursi_tersedia: '20',
          tanggal_keberangkatan: '2019-01-02 09:00:00',
          bus_id: '0a172198-297a-4365-ba01-19ab0cb2c893',
          tujuan_id: '00f185d8-979a-40f9-877e-07cdc237a99e'
        },
        {
          id: '255f4c32-e44f-4a2c-8cf2-f75c32fcf179',
          harga: '200000',
          kursi_tersedia: '20',
          tanggal_keberangkatan: '2019-01-02 09:00:00',
          bus_id: '0a172198-297a-4365-ba01-19ab0cb2c893',
          tujuan_id: '00f185d8-979a-40f9-877e-07cdc237a99e'
        },
        {
          id: '255f4c32-e44f-4a2c-8cf2-f75c32fcf189',
          harga: '200000',
          kursi_tersedia: '20',
          tanggal_keberangkatan: '2019-01-02 09:00:00',
          bus_id: '0a172198-297a-4365-ba01-19ab0cb2c893',
          tujuan_id: '00f185d8-979a-40f9-877e-07cdc237a99e'
        }
      ]);
    });
};
