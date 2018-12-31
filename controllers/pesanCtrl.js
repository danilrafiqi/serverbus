const knex = require('../db/knex');
const knexDate = knex.fn.now();
const uuidv4 = require('uuid/v4');

module.exports = {
  penumpang: (req, res) => {
    const data = {
      id: req.body.id,
      nama: req.body.nama,
      no_hp: req.body.no_hp,
      email: req.body.email
    };

    knex('penumpang')
      .insert(data)
      .then(datas => {
        res.send('success');
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  },
  tiket: (req, res) => {
    const data = {
      id: uuidv4(),
      waktu: knexDate,
      expire: knexDate,
      no_kursi: req.body.no_kursi,
      status: 'dipesan',
      penumpang_id: req.body.id,
      jadwal_id: req.body.jadwal_id
    };

    knex('tiket')
      .insert(data)
      .then(datas => {
        res.send('success');
      })
      .catch(err => {
        res.send('error disini : ' + err);
      });
  }
};
