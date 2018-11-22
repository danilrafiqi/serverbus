exports.up = function(knex, Promise) {
  return knex.schema.createTable('harga', function(table) {
    table
      .uuid('id_harga')
      .primary()
      .unique();
    table.uuid('id_rute');
    table.integer('harga');
    table
      .foreign('id_rute')
      .references('id_rute')
      .inTable('rute');
    table.uuid('id_tujuan');
    table
      .foreign('id_tujuan')
      .references('id_tujuan')
      .inTable('tujuan');
    table.uuid('id_agen');
    table
      .foreign('id_agen')
      .references('id_agen')
      .inTable('agen');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('harga');
};
