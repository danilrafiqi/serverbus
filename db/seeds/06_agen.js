const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agen').del()
    .then(function () {
      // Inserts seed entries
      return knex('agen').insert([
        {id_agen: 'PSP-BDL', nama: 'Puspa BDL', lokasi:'Bandar Lampung', no_hp:'0845678988', id_po:'02-DMR'},
        {id_agen: 'PSP-JKT', nama: 'Puspa JKT', lokasi:'Jakarta', no_hp:'08453333212', id_po:'01-PSP'},
        {id_agen: 'DMR-BDL', nama: 'Damri BDL', lokasi:'Bandar Lampung', no_hp:'087643213', id_po:'03-RSL'},
        {id_agen: 'RSL-BDL', nama: 'Rosalia Indah BDL', lokasi:'Bandar Lampung', no_hp:'089934218890', id_po:'01-PSP'}
      ]);
    });
};
