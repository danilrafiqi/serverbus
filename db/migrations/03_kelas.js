
exports.up = function(knex, Promise) {
	return knex.schema.createTable('kelas', function (table) {
		table.uuid('id_kelas').primary().unique()
		table.string('nama_kelas');
		table.string('deskripsi');
		table.string('harga');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('kelas')
};
