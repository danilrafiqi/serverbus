exports.up = function(knex, Promise) {
  return knex.schema.createTable('jadwal', function(table) {
    table
      .uuid('id_jadwal')
      .primary()
      .unique();
    table.string('nama');
    table.date('tanggal_keberangkatan');
    table.time('waktu_keberangkatan', 6);
    table.integer('harga');
    table.uuid('plat');
    table
      .foreign('plat')
      .references('plat')
      .inTable('bus');
    table.uuid('id_rute');
    table
      .foreign('id_rute')
      .references('id_rute')
      .inTable('rute');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jadwal');
};
