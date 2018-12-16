exports.up = function(knex, Promise) {
  return knex.schema.createTable('tiket_header', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.datetime('waktu');
    table.datetime('expire');
    table.enu('status', ['dipesan', 'lunas', 'kosong']);
    table.uuid('agen_id');
    table
      .foreign('agen_id')
      .references('id')
      .inTable('agen');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tiket');
};
