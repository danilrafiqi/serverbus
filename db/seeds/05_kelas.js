const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kelas').del()
    .then(function () {
      // Inserts seed entries
      return knex('kelas').insert([
        {id: '43bfc5a5-6112-4e22-8847-0982e270a653', kode: 'A1A', nama_kelas: 'Ekonomi', id_po: 'ce0dd585-8591-4b7a-8944-d2f081dd7ac7'},
        {id: 'fe39c816-2538-43f3-b01c-06e19554d79d', kode: 'A2B', nama_kelas: 'Bisnis', id_po: '7ac45099-f0d4-4b27-8244-0069ba18bf66'},
        {id: '3d971bf7-203b-45dd-a85b-bd679246c92f', kode: 'A3C', nama_kelas: 'Eksekutif', id_po: '7ac45099-f0d4-4b27-8244-0069ba18bf66'}
      ]);
    });
};
