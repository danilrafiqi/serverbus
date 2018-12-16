exports.up = function(knex, Promise) {
  return knex.schema.createTable('tiket_detail', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('no_kursi', 2);
    table.uuid('tiket_header_id');
    table
      .foreign('tiket_header_id')
      .references('id')
      .inTable('tiket_header');
    table.uuid('penumpang_id');
    table
      .foreign('penumpang_id')
      .references('id')
      .inTable('penumpang');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tiket_detail');
};
