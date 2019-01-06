exports.up = function(knex, Promise) {
  return knex.schema.createTable('operator', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('kode', 20);
    table.string('nama', 40);
    table.enu('jenis_kelamin', ['l', 'p']);
    table.string('foto');
    table.uuid('po_id').nullable();
    table
      .foreign('po_id')
      .references('id')
      .inTable('po');
    table.uuid('login').nullable();
    table
      .foreign('login')
      .references('username')
      .inTable('login');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('operator');
};
