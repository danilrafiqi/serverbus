
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
  	table.increments();
  	table.string('username');
  	table.string('password');
  	table.string('email');
	table.timestamp('created_at').defaultTo(knex.fn.now());
	table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
