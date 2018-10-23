const knex = require('../db/knex')
const table = 'agen'

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
			nama: req.body.nama,
			lokasi: req.body.lokasi,
			no_hp: req.body.no_hp,
			id_po: req.body.id_po

		}

	    knex(table).insert(data)
	    .then(datas =>{
	      res.send('Penambahan Data Agen Berhasil')
	    })
	    .catch(err =>{
	      res.send('Penambahan Data Agen error  : '+ err)
	    })
	},
	edit:(req, res) => {
		const data = {
			id: req.body.id,
			nama: req.body.nama,
			lokasi: req.body.lokasi,
			no_hp: req.body.no_hp,
			id_po: req.body.id_po
		}

	    knex(table)
		    .where('id', req.params.id)
		    .update(data)
		    .then(datas =>{
		      res.send('Success update data agen : '+ req.params.id)
		    })
		    .catch(err =>{
		      res.send('error update data agen : '+ err)
		    })
	},
	delete: (req, res) => {
	    knex(table)
	    .where('id', req.params.id)
	    .del()
	    .then(() =>{
	      res.send('success delete data agen : '+ req.params.id)
	    })
	    .catch(err =>{
	      res.send('error delete data agen : '+ err)
	    })
	}

}