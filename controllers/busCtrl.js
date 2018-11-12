const knex = require('../db/knex')
const table = 'bus'
const knexDate= knex.fn.now()
//const uuidv4 = require('uuid/v4')



module.exports = {
	all: (req, res) => {
		knex.select().from(table)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	detail: (req, res) => {
		knex.select().from(table)
			.where('no_plat', req.params.no_plat)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			no_plat: req.body.no_plat,
			status: req.body.status,
			jumlah_kursi: req.body.jumlah_kursi,
			tipe_kursi: req.body.tipe_kursi,
			id_kelas: req.body.id_kelas
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
			no_plat: req.body.no_plat,
			status: req.body.status,
			jumlah_kursi: req.body.jumlah_kursi,
			tipe_kursi: req.body.tipe_kursi,
			updated_at: knexDate,
			id_kelas: req.body.id_kelas
		}
		knex(table)
		    .where('no_plat', req.params.no_plat)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.no_plat)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('no_plat', req.params.no_plat)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.no_plat)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
