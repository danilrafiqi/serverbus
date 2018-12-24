exports.up = function(knex, Promise) {
  return knex.schema.createTable('tiket', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.datetime('waktu');
    table.datetime('expire');
    table.string('no_kursi', 2);
    table.enu('status', ['dipesan', 'lunas', 'kosong']);
    table.uuid('penumpang_id');
    table
      .foreign('penumpang_id')
      .references('id')
      .inTable('penumpang');
    table.uuid('jadwal_id');
    table
      .foreign('jadwal_id')
      .references('id')
      .inTable('jadwal');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tiket');
};
