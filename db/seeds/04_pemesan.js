const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pemesan').del()
    .then(function () {
      // Inserts seed entries
      return knex('pemesan').insert([
        {id: uuidv4(), nama: 'Bella Mo', alamat: 'Bandar Lampung', no_hp: '081373610823', email: 'bellamifta289@gmail.com'},
        {id: uuidv4(), nama: 'Sinta', alamat: 'Metro', no_hp: '081380084531', email: 'sinta223@gmail.com'},
        {id: uuidv4(), nama: 'Maulana', alamat: 'Pringsewu', no_hp: '085709983211', email: 'maulanamz@gmail.com'},
        {id: uuidv4(), nama: 'Rafiqi', alamat: 'Lampung Tengah', no_hp: '081244532211', email: 'danil.rafiqi@gmail.com'},
        {id: uuidv4(), nama: 'Surya', alamat: 'Natar', no_hp: '082340042200', email: 'bsuryagita11@gmail.com'}
      ]);
    });
};
