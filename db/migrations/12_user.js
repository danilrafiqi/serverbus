exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('kode', 20);
    table.string('nama', 40);
    table.enu('jenis_kelamin', ['l', 'p']);
    table.enu('hak_akses', ['superadmin', 'admin']);
    table.string('foto');
    table.uuid('login_id').nullable();
    table
      .foreign('login_id')
      .references('id')
      .inTable('login');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
