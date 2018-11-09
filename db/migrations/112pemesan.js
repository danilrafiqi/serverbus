exports.up = function(knex, Promise) {
  return knex.schema.createTable('pemesan', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('nama');
    table.string('no_hp');
    table.string('email');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pemesan');
};
