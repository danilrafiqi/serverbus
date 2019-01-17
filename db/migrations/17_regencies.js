exports.up = function(knex, Promise) {
  return knex.schema.createTable('regencies', function(table) {
    table
      .string('id', 4)
      .primary()
      .unique();
    table.string('province_id');
    table
      .foreign('province_id')
      .references('id')
      .inTable('provinces');
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('regencies');
};
