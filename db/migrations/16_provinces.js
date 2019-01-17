exports.up = function(knex, Promise) {
  return knex.schema.createTable('provinces', function(table) {
    table
      .string('id', 2)
      .primary()
      .unique();
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('provinces');
};
