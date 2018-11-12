const knex = require('../db/knex')
const table = 'bank'
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
			.where('id_bank', req.params.id_bank)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			nama: req.body.nama,
			no_rek: req.body.no_rek,
			id_po: req.body.id_po
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
			no_rek: req.body.no_rek,
			id_po: req.body.id_po
		}
		knex(table)
		    .where('id_bank', req.params.id_bank)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_bank)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_bank', req.params.id_bank)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_bank)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
