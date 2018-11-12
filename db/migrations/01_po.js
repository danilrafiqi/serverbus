
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('po', function (table) {
		table.uuid('id_po').primary().unique()
		table.string('nama');
		table.string('alamat');
		table.string('no_hp');
		table.string('email');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('po')
};
