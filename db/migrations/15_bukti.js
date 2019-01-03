exports.up = function(knex, Promise) {
  return knex.schema.createTable('bukti', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('foto');
    table.string('nama_pengirim');
    table.string('nama_bank_pengirim');
    table.string('jumlah_transfer');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bukti');
};
