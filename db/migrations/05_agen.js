exports.up = function(knex, Promise) {
  return knex.schema.createTable('agen', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('nama', 40);
    table.string('email', 40);
    table.string('no_hp', 14);
    table.string('alamat');
    table.uuid('po_id');
    table
      .foreign('po_id')
      .references('id')
      .inTable('po');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('agen');
};
