exports.up = function(knex, Promise) {
  return knex.schema.createTable('rute', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('kode', 8);
    table.string('deskripsi');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rute');
};
