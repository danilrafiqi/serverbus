const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('po').del()
    .then(function () {
      // Inserts seed entries
      return knex('po').insert([
        {id: uuidv4(), kode: '01', nama: 'Puspa', alamat: 'Jl. Soekarno Hatta, Rajabasa', no_hp: '(0721)783111', email: 'puspajaya@gmail.com'},
        {id: uuidv4(), kode: '02', nama: 'Damri', alamat: 'Jl. Kapten Abdul Haq, Rajabasa', no_hp: '(0721)703088', email: 'damri@gmail.com'},
        {id: uuidv4(), kode: '03', nama: 'Rosalia Indah', alamat: 'Jl. Soekarno Hatta, Way Halim, Rajabasa', no_hp: '(0721)700611', email: 'rosaliaindah@gmail.com'},
        {id: uuidv4(), kode: '04', nama: 'Antar Lintas Sumartera (ALS)', alamat: 'Jl. Kapten Abdul Haq No. 75, Rajabasa', no_hp: '(0721)748277', email: 'alsbus@gmail.com'},
        {id: uuidv4(), kode: '05', nama: 'Pahala Kencana', alamat: 'Jl. Zainal Abidin Pagar Alam No. 28, Rajabasa', no_hp: '(0721)781363', email: 'pahalakencana@gmail.com'}
      ]);
    });
};
