
exports.up = function(knex, Promise) {
	return knex.schema.createTable('user', function (table) {
		table.uuid('id').primary().unique()
		table.string('email');
		table.string('password');
		table.string('foto');
		table.enu('hak_akses', ['superadmin', 'admin-po', 'agen'])
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('user')
};
