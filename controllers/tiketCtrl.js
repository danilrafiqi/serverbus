const knex = require('../db/knex')
const table = 'tiket'

module.exports = {
	all: (req, res) => {
		knex.select().from(table)
	    .then(datas =>{
	      res.send(datas)
	    })
	},
	detail: (req, res) => {
		knex.select().from(table)
			.where('id', req.params.id)
	    .then(datas =>{
	      res.send(datas)
	    })
	},
	post: (req, res) => {
		const data = {
			id: req.body.id,
			tanggal: req.body.tanggal,
			status: req.body.status,
			expire: req.body.expire,
			id_pemesan: req.body.id_pemesan,
			id_jadwal: req.body.id_jadwal,
			id_kursi: req.body.id_kursi,
			id_agen: req.body.id_agen

		}

	    knex(table).insert(data)
	    .then(datas =>{
	      res.send('Penambahan Data Tiket Berhasil')
	    })
	    .catch(err =>{
	      res.send('Penambahan Data Tiket error  : '+ err)
	    })
	},
	edit:(req, res) => {
		const data = {
			id: req.body.id,
			tanggal: req.body.tanggal,
			status: req.body.status,
			expire: req.body.expire,
			id_pemesan: req.body.id_pemesan,
			id_jadwal: req.body.id_jadwal,
			id_kursi: req.body.id_kursi,
			id_agen: req.body.id_agen
		}

	    knex(table)
		    .where('id', req.params.id)
		    .update(data)
		    .then(datas =>{
		      res.send('Success update data Tiket : '+ req.params.id)
		    })
		    .catch(err =>{
		      res.send('error update data Tiket : '+ err)
		    })
	},
	delete: (req, res) => {
	    knex(table)
	    .where('id', req.params.id)
	    .del()
	    .then(() =>{
	      res.send('success delete data Tiket : '+ req.params.id)
	    })
	    .catch(err =>{
	      res.send('error delete data Tiket : '+ err)
	    })
	}

}