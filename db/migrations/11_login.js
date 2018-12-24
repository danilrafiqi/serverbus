exports.up = function(knex, Promise) {
  return knex.schema.createTable('login', function(table) {
    table
      .uuid('id')
      .primary()
      .unique();
    table.string('username', 40).unique();
    table.string('password', 40);
    table.string('email').unique();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('login');
};
