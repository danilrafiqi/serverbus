const knex = require('../db/knex')
const table = 'po'
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
			.where('id_po', req.params.id_po)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			id_po: uuidv4(),
			nama: req.body.nama,
			alamat: req.body.alamat,
			no_hp: req.body.no_hp,
			email: req.body.email
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
			alamat: req.body.alamat,
			no_hp: req.body.no_hp,
			email: req.body.email,
			updated_at: knexDate
		}
		knex(table)
		    .where('id_po', req.params.id_po)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_po)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_po', req.params.id_po)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_po)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
