const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('login')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('login').insert([
        {
          email: 'gede@gmail.com',
          username: 'danil',
          password: '123456'
        },
        {
          email: 'bellamifta289@gmail.com',
          username: 'danils',
          password: '123456'
        },
        {
          email: 'dannil@gmail.com',
          username: 'danilx',
          password: '12345'
        }
      ]);
    });
};
