const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: '255f4c32-5678-4a2c-8cf2-f75c32fcf158',
          email: 'bellamifta289@gmail.com',
          nama: 'Bella Miftha Octavia',
          jenis_kelamin: 'p',
          foto: 'default.jpg'
        },
        {
          id: '255f4c32-1234-4a2c-8cf2-f75c32fcf158',
          email: 'danil.rafiqi@gmail.com',
          nama: 'Muhamad Danil Rafiqi',
          jenis_kelamin: 'l',
          foto: 'default.jpg'
        }
      ]);
    });
};
