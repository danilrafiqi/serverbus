
exports.up = function(knex, Promise) {
	return knex.schema.createTable('tiket', function (table) {
		table.uuid('id_tiket').primary().unique()
		table.string('no_kursi');
		table.date('tgl_pemesanan');
		table.timestamp('waktu_pemesanan');
		table.uuid('id_harga');
		table.foreign('id_harga').references('id_harga').inTable('harga');
		table.uuid('id_jadwal');
		table.foreign('id_jadwal').references('id_jadwal').inTable('jadwal');
		table.uuid('id_penumpang');
		table.foreign('id_penumpang').references('id_penumpang').inTable('penumpang');
		table.uuid('id_transaksi');
		table.foreign('id_transaksi').references('id_transaksi').inTable('transaksi');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('tiket')
};
