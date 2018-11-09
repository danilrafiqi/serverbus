
exports.up = function(knex, Promise) {
	return knex.schema.createTable('kursi', function (table) {
		table.uuid('id_kursi').primary().unique()
		table.string('kode');
		table.string('no_plat', 10);
		table.foreign('no_plat').references('no_plat').inTable('bus');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('kursi')
};
