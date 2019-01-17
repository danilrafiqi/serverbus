// Update with your config settings.

module.exports = {
  // development: {
  //   client: 'mysql',
  //   connection: {
  //     host: 'localhost',
  //     user: 'root',
  //     password: '',
  //     database: 'db_bus2'
  //   },
  //   migrations: {
  //     directory: __dirname + '/db/migrations'
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds'
  //   }
  // },

  production: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/db/db_busnew.sqlite'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    },
    useNullAsDefault: true
  },
  development: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/db/db_busnew.sqlite'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    },
    useNullAsDefault: true
  }

  // production: {
  //   client: 'pg',
  //   connection: {
  //     host: 'ec2-107-20-183-142.compute-1.amazonaws.com',
  //     user: 'uhtqedovcbzcqb',
  //     password:
  //       '1a6ff2968601937c83a65a9930e8e617bbb2e180a47c47c39574bcfde913c6d3',
  //     database: 'des1v8279t82km'
  //   },
  //   migrations: {
  //     directory: __dirname + '/db/migrations'
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds'
  //   }
  // }
};
