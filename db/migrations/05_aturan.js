
exports.up = function(knex, Promise) {
  return knex.schema.createTable('aturan', function (table) {
		table.uuid('id_aturan').primary().unique()
		table.string('aturan_ppn');
		table.string('aturan_pembatalan');
		table.string('aturan_penumpang');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('aturan')
};
