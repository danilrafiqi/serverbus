const knex = require('../db/knex')
const table = 'harga'
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
			.where('id_harga', req.params.id_harga)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			id_harga: uuidv4(),
			id_rute: req.body.id_rute,
			id_tujuan: req.body.id_tujuan,
			id_agen: req.body.id_agen
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
			id_rute: req.body.id_rute,
			id_tujuan: req.body.id_tujuan,
			updated_at: knexDate,
			id_agen: req.body.id_agen
		}
		knex(table)
		    .where('id_harga', req.params.id_harga)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_harga)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_harga', req.params.id_harga)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_harga)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
