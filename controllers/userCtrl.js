const knex = require('../db/knex')
const table = 'user'
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
			username: req.body.username,
			password: req.body.password,
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
			id: req.body.id,
			username: req.body.username,
			password: req.body.password,
			email: req.body.email
		}

	    knex(table)
		    .where('id', req.params.id)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
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