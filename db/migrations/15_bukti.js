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
    table.uuid('tiket_id');
    table
      .foreign('tiket_id')
      .references('id')
      .inTable('tiket');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bukti');
};
