const uuidv4 = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bank')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('bank').insert([
        {
          id: '164ca841-1234-4ad9-a50c-92fbe1afb55d',
          nama: 'BRI',
          atas_nama: 'M Danil Rafiqi',
          no_rek: '5663-8213-9082'
        },
        {
          id: '164ca841-1235-4ad9-a50c-92fbe1afb55d',
          nama: 'Mandiri',
          atas_nama: 'M Danil Rafiqi',
          no_rek: '7653-2102-786'
        },
        {
          id: '164ca841-1236-4ad9-a50c-92fbe1afb55d',
          nama: 'BRI Syariah',
          atas_nama: 'M Danil Rafiqi',
          no_rek: '5663-8213-9088'
        },
        {
          id: '164ca841-1237-4ad9-a50c-92fbe1afb55d',
          nama: 'Mandiri Syariah',
          atas_nama: 'M Danil Rafiqi',
          no_rek: '7653-2102-787'
        },
        {
          id: '164ca841-1238-4ad9-a50c-92fbe1afb55d',
          nama: 'BNI',
          atas_nama: 'M Danil Rafiqi',
          no_rek: '0021-5603-0989'
        }
      ]);
    });
};
