exports.up = function(knex, Promise) {
  return knex.schema.createTable('rute', function(table) {
    table
      .uuid('id_rute')
      .primary()
      .unique();
    table.string('nama');
    table.string('deskripsi');
    table.string('lama_keberangkatan');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rute');
};
