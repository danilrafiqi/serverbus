const uuidv4 = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bank').del()
    .then(function () {
      // Inserts seed entries
      return knex('bank').insert([
        {id_bank: '', nama: 'BRI', no_rek: '5663-8213-9082', id_po: '164ca841-a4bc-4ad9-a50c-92fbe1afb55d'},
        {id_bank: '', nama: 'Mandiri', no_rek: '7653-2102-786', id_po: 'e3259cc3-3ae6-4cad-a44d-65dc175f05d3'},
        {id_bank: '', nama: 'BRI', no_rek: '5663-8213-9088', id_po: '936fa085-2d01-4713-a9cb-03a2809d5e95'},
        {id_bank: '', nama: 'Mandiri', no_rek: '7653-2102-787', id_po: '3ab51aac-f534-47e8-8184-f516077df3be'},
        {id_bank: '', nama: 'BNI', no_rek: '0021-5603-0989', id_po: 'eacf97d2-dcef-4ff8-80df-49271b0b3c42'}
      ]);
    });
};
