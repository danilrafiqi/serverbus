const uuidv4 = require('uuid/v4')
const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('penumpang').del()
    .then(function () {
      // Inserts seed entries
      return knex('penumpang').insert([
        {id_penumpang: uuidv4(), nama: 'Chika', no_hp: '081380901221', email: 'chika21@gmail.com'},
        {id_penumpang: uuidv4(), nama: 'Aisha', no_hp: '081382821278', email: 'aisha78@gmail.com'},
        {id_penumpang: uuidv4(), nama: 'Yusuf', no_hp: '081323230090', email: 'yusuf90@gmai.com'}
      ]);
    });
};
