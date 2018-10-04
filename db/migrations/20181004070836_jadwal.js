
exports.up = function(knex, Promise) {
	return knex.schema.createTable('jadwal', function (table) {
		table.uuid('id').primary().unique()
		table.string('awal');
		table.string('tujuan');
		table.time('waktu', 6);
		table.integer('harga');
		table.uuid('id_bus');
		table.foreign('id_bus').references('id').inTable('bus');
		table.uuid('id_rute');
		table.foreign('id_rute').references('id').inTable('rute');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('jadwal')
};
