
exports.up = function(knex, Promise) {
	return knex.schema.createTable('bus', function (table) {
		table.string('no_plat', 10).primary().unique()
		table.string('status');
		table.string('jumlah_kursi');
		table.string('tipe_kursi');
		table.uuid('id_kelas');
		table.foreign('id_kelas').references('id_kelas').inTable('kelas');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('bus')
};
