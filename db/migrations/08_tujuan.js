exports.up = function(knex, Promise) {
  return knex.schema.createTable('tujuan', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('pemberangkatan');
    table.string('pemberhentian');
    table.uuid('rute_id');
    table
      .foreign('rute_id')
      .references('id')
      .inTable('rute');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tujuan');
};
