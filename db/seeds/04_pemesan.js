const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pemesan').del()
    .then(function () {
      // Inserts seed entries
      return knex('pemesan').insert([
        {id: '4c95c898-5933-4dea-bdbb-873900581031', nama: 'Bella Mo', alamat: 'Bandar Lampung', no_hp: '081373610823', email: 'bellamifta289@gmail.com'},
        {id: '8e5632d0-e34e-4961-991c-cd2597eca4d4', nama: 'Sinta', alamat: 'Metro', no_hp: '081380084531', email: 'sinta223@gmail.com'},
        {id: 'e264f13c-dd3b-4b81-b346-dd33d2447915', nama: 'Maulana', alamat: 'Pringsewu', no_hp: '085709983211', email: 'maulanamz@gmail.com'},
        {id: 'f23b0d3e-dd0d-49d5-8a97-7d21d230c903', nama: 'Rafiqi', alamat: 'Lampung Tengah', no_hp: '081244532211', email: 'danil.rafiqi@gmail.com'},
        {id: '66b14f89-bc5f-423d-813f-c3479fdd7411', nama: 'Surya', alamat: 'Natar', no_hp: '082340042200', email: 'bsuryagita11@gmail.com'}
      ]);
    });
};
