const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('po').del()
    .then(function () {
      // Inserts seed entries
      return knex('po').insert([
        {id: 'ce0dd585-8591-4b7a-8944-d2f081dd7ac7', kode: '01', nama: 'Puspa', alamat: 'Jl. Soekarno Hatta, Rajabasa', no_hp: '(0721)783111', email: 'puspajaya@gmail.com'},
        {id: '7ac45099-f0d4-4b27-8244-0069ba18bf66', kode: '02', nama: 'Damri', alamat: 'Jl. Kapten Abdul Haq, Rajabasa', no_hp: '(0721)703088', email: 'damri@gmail.com'},
        {id: '5f2bc2b7-43b8-42d8-8cd8-a09d0c70a7f8', kode: '03', nama: 'Rosalia Indah', alamat: 'Jl. Soekarno Hatta, Way Halim, Rajabasa', no_hp: '(0721)700611', email: 'rosaliaindah@gmail.com'},
        {id: 'ae312721-232b-42dd-98eb-43b4de5877fb', kode: '04', nama: 'Antar Lintas Sumartera (ALS)', alamat: 'Jl. Kapten Abdul Haq No. 75, Rajabasa', no_hp: '(0721)748277', email: 'alsbus@gmail.com'},
        {id: '68440dbd-44a9-4526-9288-3eeba9990a2a', kode: '05', nama: 'Pahala Kencana', alamat: 'Jl. Zainal Abidin Pagar Alam No. 28, Rajabasa', no_hp: '(0721)781363', email: 'pahalakencana@gmail.com'}
      ]);
    });
};
