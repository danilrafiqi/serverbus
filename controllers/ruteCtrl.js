const knex = require('../db/knex')
const table = 'rute'
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
			.where('id_rute', req.params.id_rute)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			id_rute: uuidv4v4(),
			nama: req.body.nama,
			deskripsi: req.body.deskripsi,
			lama_keberangkatan: req.body.lama_keberangkatan
		}

		knex(table).insert(data)
	    	.then(datas =>{
	     		res.send('success')
	   		})
	    	.catch(err =>{
	      		res.send('error disini : '+ err)
	    	})
	},

	edit:(req, res) => {
		
		const data = {
			nama: req.body.nama,
			deskripsi: req.body.deskripsi,
			lama_keberangkatan: req.body.lama_keberangkatan
		}
		knex(table)
		    .where('id_rute', req.params.id_rute)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_rute)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_rute', req.params.id_rute)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_rute)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
