const knex = require('../db/knex')
const table = 'bus'

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
			plat: req.body.plat,
			id_kelas: req.body.id_kelas
		}

	    knex(table).insert(data)
	    .then(datas =>{
	      res.send('Penambahan Data Bus Berhasil')
	    })
	    .catch(err =>{
	      res.send('Penambahan Data Bus error  : '+ err)
	    })
	},
	edit:(req, res) => {
		const data = {
			id: req.body.id,
			plat: req.body.plat,
			id_kelas: req.body.id_kelas
		}

	    knex(table)
		    .where('id', req.params.id)
		    .update(data)
		    .then(datas =>{
		      res.send('Success update data bus : '+ req.params.id)
		    })
		    .catch(err =>{
		      res.send('error update data bus : '+ err)
		    })
	},
	delete: (req, res) => {
	    knex(table)
	    .where('id', req.params.id)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}