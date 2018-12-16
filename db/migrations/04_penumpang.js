exports.up = function(knex, Promise) {
  return knex.schema.createTable('penumpang', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('kode', 12);
    table.string('nama', 40);
    table.string('no_hp', 14);
    table.string('email', 40);
    table.string('alamat');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('penumpang');
};
