exports.up = function(knex, Promise) {
  return knex.schema.createTable('transaksi', function(table) {
    table
      .uuid('id_transaksi')
      .primary()
      .unique();
    table.string('bukti_pembayaran');
    table.enu('status_transaksi', ['lunas', 'kurang', 'gagal']);
    table.string('total');
    table.datetime('tgl_pesan');
    table.datetime('expired');
    table
      .foreign('id_pemesan')
      .references('id_pemesan')
      .inTable('pemesan');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transaksi');
};
