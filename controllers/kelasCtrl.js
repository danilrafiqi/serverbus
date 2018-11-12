const knex = require('../db/knex')
const table = 'kelas'
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
			.where('id_kelas', req.params.id_kelas)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			id_kelas: uuidv4(),
			nama_kelas: req.body.nama_kelas,
			deskripsi: req.body.deskripsi,
			harga: req.body.harga
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
			nama_kelas: req.body.nama_kelas,
			deskripsi: req.body.deskripsi,
			updated_at: knexDate,
			harga: req.body.harga
		}
		knex(table)
		    .where('id_kelas', req.params.id_kelas)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_kelas)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_kelas', req.params.id_kelas)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_kelas)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
