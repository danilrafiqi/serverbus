// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:'localhost',
      user:'user_db_spk',
      password:'user_db_spk',
      database:'db_belajar'
    },
    migrations:{
      directory:__dirname+ '/db/migrations',
    },
    seeds:{
      directory:__dirname+ '/db/seeds',
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
