const knex = require('../db/knex')
const table = 'kursi'

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
			kode: req.body.kode,
			id_bus: req.body.id_bus

		}

	    knex(table).insert(data)
	    .then(datas =>{
	      res.send('Penambahan Data Kursi Berhasil')
	    })
	    .catch(err =>{
	      res.send('Penambahan Data Kursi error  : '+ err)
	    })
	},
	edit:(req, res) => {
		const data = {
			id: req.body.id,
			kode: req.body.kode,
			id_bus: req.body.id_bus
		}

	    knex(table)
		    .where('id', req.params.id)
		    .update(data)
		    .then(datas =>{
		      res.send('Success update data kursi : '+ req.params.id)
		    })
		    .catch(err =>{
		      res.send('error update data kursi : '+ err)
		    })
	},
	delete: (req, res) => {
	    knex(table)
	    .where('id', req.params.id)
	    .del()
	    .then(() =>{
	      res.send('success delete data kursi : '+ req.params.id)
	    })
	    .catch(err =>{
	      res.send('error delete data kursi : '+ err)
	    })
	}

}