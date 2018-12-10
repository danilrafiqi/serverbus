const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('penumpang')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('penumpang').insert([
        {
          id_penumpang: '036420db-5656-4017-80d8-4e9d386424de',
          nama: 'Chika',
          no_hp: '081380901221',
          email: 'chika21@gmail.com'
        },
        {
          id_penumpang: 'bc786172-1df3-4eea-83b7-9fff36a4f5e9',
          nama: 'Aisha',
          no_hp: '081382821278',
          email: 'aisha78@gmail.com'
        },
        {
          id_penumpang: '5b1f8bb0-3a74-4e2c-9b2c-62ec5040434b',
          nama: 'Ainun',
          no_hp: '081382821268',
          email: 'nun78@gmail.com'
        },
        {
          id_penumpang: 'b10f0a8d-3dc3-4cd0-9c62-06102f590b23',
          nama: 'Yusuf',
          no_hp: '081323230090',
          email: 'yusuf90@gmai.com'
        }
      ]);
    });
};
