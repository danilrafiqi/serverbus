exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('kode', 20);
    table.string('username', 40).unique();
    table.string('password', 40);
    table.string('email').unique();
    table.string('nama', 40);
    table.enu('jenis_kelamin', ['l', 'p']);
    table.enu('hak_akses', ['superadmin', 'admin_po', 'agen']);
    table.string('foto');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin');
};