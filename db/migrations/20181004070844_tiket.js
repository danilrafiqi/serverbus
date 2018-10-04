
exports.up = function(knex, Promise) {
	return knex.schema.createTable('tiket', function (table) {
		table.uuid('id').primary().unique()
		table.date('tanggal');
		table.enu('status', ['kosong', 'belum_lunas', 'dipesan'])
		table.timestamp('expire');
		table.uuid('id_pemesan');
		table.foreign('id_pemesan').references('id').inTable('pemesan');
		table.uuid('id_jadwal');
		table.foreign('id_jadwal').references('id').inTable('jadwal');
		table.uuid('id_kursi');
		table.foreign('id_kursi').references('id').inTable('kursi');
		table.uuid('id_agen');
		table.foreign('id_agen').references('id').inTable('agen');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('tiket')
};
