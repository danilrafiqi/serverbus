
exports.up = function(knex, Promise) {
	return knex.schema.createTable('kursi', function (table) {
		table.uuid('id').primary().unique()
		table.string('kode');
		table.uuid('id_kursi');
		table.foreign('id_kursi').references('id').inTable('kursi');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('kursi')
};
