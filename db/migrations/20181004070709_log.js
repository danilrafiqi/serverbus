
exports.up = function(knex, Promise) {
	return knex.schema.createTable('log', function (table) {
		table.uuid('id').primary().unique()
		table.timestamp('waktu').defaultTo(knex.fn.now());
		table.string('user');
		table.string('tipe');
		table.string('deskripsi');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('log')
};
