const knex = require('../db/knex')
const table = 'jadwal'
const knexDate= knex.fn.now()
const uuidv4 = require('uuid/v4')


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
			id: uuidv4(),
			awal: req.body.awal,
			tujuan: req.body.tujuan,
			waktu: req.body.waktu,
			harga: req.body.harga,
			id_bus: req.body.id_bus,
			id_rute: req.body.id_rute

		}

	    knex(table).insert(data)
	    .then(datas =>{
	      res.send('Penambahan Data Jadwal Berhasil')
	    })
	    .catch(err =>{
	      res.send('Penambahan Data Jadwal error  : '+ err)
	    })
	},
	edit:(req, res) => {
		const data = {
			id: req.body.id,
			awal: req.body.awal,
			tujuan: req.body.tujuan,
			waktu: req.body.waktu,
			harga: req.body.harga,
			id_bus: req.body.id_bus,
			id_rute: req.body.id_rute
		}

	    knex(table)
		    .where('id', req.params.id)
		    .update(data)
		    .then(datas =>{
		      res.send('Success update data Jadwal : '+ req.params.id)
		    })
		    .catch(err =>{
		      res.send('error update data Jadwal : '+ err)
		    })
	},
	delete: (req, res) => {
	    knex(table)
	    .where('id', req.params.id)
	    .del()
	    .then(() =>{
	      res.send('success delete data Jadwal : '+ req.params.id)
	    })
	    .catch(err =>{
	      res.send('error delete data Jadwal : '+ err)
	    })
	}

}