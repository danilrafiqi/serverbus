exports.up = function(knex, Promise) {
  return knex.schema.createTable('login', function(table) {
    table.string('email').primary();
    table.string('password');
    table.enu('hak_akses', [
      'superadmin',
      'manager',
      'admin',
      'manager_po',
      'petugas'
    ]);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('login');
};
