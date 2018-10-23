const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agen').del()
    .then(function () {
      // Inserts seed entries
      return knex('agen').insert([
        {id: 'a3fbfb0a-c116-40b8-9c65-05d71b62d762', nama: 'Puspa BDL', lokasi:'Bandar Lampung', no_hp:'0845678988', id_po:'ce0dd585-8591-4b7a-8944-d2f081dd7ac7'},
        {id: '7f9d411e-fae8-4e05-8e42-b62d318f27ba', nama: 'Puspa JKT', lokasi:'Jakarta', no_hp:'08453333212', id_po:'ce0dd585-8591-4b7a-8944-d2f081dd7ac7'},
        {id: 'eff869cb-98b5-433c-a7ac-d94e979a6908', nama: 'Damri BDL', lokasi:'Bandar Lampung', no_hp:'087643213', id_po:'7ac45099-f0d4-4b27-8244-0069ba18bf66'},
        {id: 'ff152901-b2ca-4737-b1f9-76891f6200c1', nama: 'Rosalia Indah BDL', lokasi:'Bandar Lampung', no_hp:'089934218890', id_po:'5f2bc2b7-43b8-42d8-8cd8-a09d0c70a7f8'}
      ]);
    });
};
