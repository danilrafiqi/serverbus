
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tujuan', function (table) {
		table.uuid('id_tujuan').primary().unique()
		table.string('nama');
		table.string('lokasi_awal');
		table.string('lokasi_tujuan');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
})
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tujuan')
};
