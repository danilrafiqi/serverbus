
exports.up = function(knex, Promise) {
	return knex.schema.createTable('kelas', function (table) {
		table.uuid('id').primary().unique()
		table.string('kode');
		table.string('nama_kelas');
		table.uuid('id_po');
		table.foreign('id_po').references('id').inTable('po');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('kelas')
};
