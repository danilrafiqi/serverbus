exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', function(table) {
    table
      .uuid('id_admin')
      .primary()
      .unique();
    table.string('username');
    table.string('password');
    table.string('email');
    table.string('nama');
    table.enu('jenis_kelamin', ['l', 'p']);
    table.string('foto');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin');
};
