exports.up = function(knex, Promise) {
  return knex.schema.createTable('jadwal', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('harga', 20);
    table.string('kursi_tersedia', 2);
    table.datetime('tanggal_keberangkatan');
    table.uuid('bus_id');
    table
      .foreign('bus_id')
      .references('id')
      .inTable('bus');
    table.uuid('tujuan_id');
    table
      .foreign('tujuan_id')
      .references('id')
      .inTable('tujuan');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jadwal');
};
