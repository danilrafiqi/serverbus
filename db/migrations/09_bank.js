
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bank', function (table) {
		table.uuid('id_bank').primary().unique()
		table.string('nama');
		table.string('no_rek');
		table.uuid('id_po');
		table.foreign('id_po').references('id_po').inTable('po');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bank')
};
