const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bank').del()
    .then(function () {
      // Inserts seed entries
      return knex('bank').insert([
        {id_bank: uuidv4(), nama: 'BRI', no_rek: '5663-8213-9082', id_po: '01-PSP'},
        {id_bank: uuidv4(), nama: 'Mandiri', no_rek: '7653-2102-786', id_po: '02-DMR'},
        {id_bank: uuidv4(), nama: 'BNI', no_rek: '0021-5603-0989', id_po: '03-RSL'}
      ]);
    });
};
