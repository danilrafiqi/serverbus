exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('kode', 20);
    table.string('nama', 40);
    table.enu('jenis_kelamin', ['l', 'p']);
    table.string('foto');
    table.string('email');
    table
      .foreign('email')
      .references('email')
      .inTable('login');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
