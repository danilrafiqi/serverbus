const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('login')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('login').insert([
        {
          id: 'f172b2b5-c4c9-47f4-893f-b44388e7f358',
          email: 'gede@gmail.com',
          username: 'danil',
          password: '123456'
        },
        {
          id: '66781e2b-66ad-47d6-bab4-dd23d1e70c1e',
          email: 'bellamifta289@gmail.com',
          username: 'danils',
          password: '123456'
        },
        {
          id: 'f80f6081-25a2-4e38-8bf4-bf9cea122922',
          email: 'dannil@gmail.com',
          username: 'danilx',
          password: '12345'
        }
      ]);
    });
};
