
exports.up = function(knex, Promise) {
	return knex.schema.createTable('agen', function (table) {
		table.uuid('id_agen').primary().unique()
		table.string('nama');
		table.string('lokasi');
		table.string('no_hp');
		table.uuid('id_po');
		table.foreign('id_po').references('id_po').inTable('po');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('agen')
};
