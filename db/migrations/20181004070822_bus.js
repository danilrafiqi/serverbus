
exports.up = function(knex, Promise) {
	return knex.schema.createTable('bus', function (table) {
		table.uuid('id').primary().unique()
		table.string('plat');
		table.uuid('id_kelas');
		table.foreign('id_kelas').references('id').inTable('kelas');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('bus')
};
