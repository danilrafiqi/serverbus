exports.up = function(knex, Promise) {
  return knex.schema.createTable('bus', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('plat', 10);
    table.string('jumlah_kursi');
    table.uuid('kelas_id');
    table
      .foreign('kelas_id')
      .references('id')
      .inTable('kelas');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bus');
};
