const knex = require('../db/knex')
const table = 'penumpang'
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
			.where('id_penumpang', req.params.id_penumpang)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			id_penumpang: uuidv4(),
			nama: req.body.nama,
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
			no_hp: req.body.no_hp,
			email: req.body.email
		}
		knex(table)
		    .where('id_penumpang', req.params.id_penumpang)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_penumpang)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_penumpang', req.params.id_penumpang)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_penumpang)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
