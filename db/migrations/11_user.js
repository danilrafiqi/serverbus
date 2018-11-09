exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.uuid('id_user').primary().unique();
    table.string('email');
    table.string('password');
    table.string('no_hp');
    table.string('nama');
    table.string('foto');
    table.enu('jenis_kelamin', ['l', 'p']);
    table.enu('hak_akses', ['superadmin', 'admin-po', 'agen']);    
    table.uuid('id_po');
    table.foreign('id_po').references('id_po').inTable('po');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
