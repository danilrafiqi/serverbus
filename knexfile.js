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
};
