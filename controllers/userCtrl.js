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
			.where('id_user', req.params.id_user)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			id_user: uuidv4(),
			email: req.body.email,
			password: req.body.password,
			no_hp: req.body.no_hp,
			nama: req.body.nama,
			foto: req.body.foto,
			jenis_kelamin: req.body.jenis_kelamin,
			hak_akses: req.body.hak_akses,
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
			email: req.body.email,
			password: req.body.password,
			no_hp: req.body.no_hp,
			nama: req.body.nama,
			foto: req.body.foto,
			jenis_kelamin: req.body.jenis_kelamin,
			hak_akses: req.body.hak_akses,
			id_po: req.body.id_po
		}
		knex(table)
		    .where('id_user', req.params.id_user)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_user)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_user', req.params.id_user)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_user)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
