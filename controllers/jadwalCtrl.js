const knex = require('../db/knex')
const table = 'jadwal'
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
			.where('id_jadwal', req.params.id_jadwal)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			id_jadwal: uuidv4(),
			nama: req.body.nama,
			tanggal_keberangkatan: req.body.tanggal_keberangkatan,
			waktu_keberangkatan: req.body.waktu_keberangkatan,
			harga: req.body.harga,
			no_plat: req.body.no_plat,
			id_rute: req.body.id_rute
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
			tanggal_keberangkatan: req.body.tanggal_keberangkatan,
			waktu_keberangkatan: req.body.waktu_keberangkatan,
			harga: req.body.harga,
			no_plat: req.body.no_plat,
			updated_at: knexDate,
			id_rute: req.body.id_rute
		}
		knex(table)
		    .where('id_jadwal', req.params.id_jadwal)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_jadwal)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_jadwal', req.params.id_jadwal)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_jadwal)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
