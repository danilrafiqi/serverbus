const knex = require('../db/knex')
const table = 'transaksi'
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
			.where('id_transaksi', req.params.id_transaksi)
	    .then(datas =>{
	      res.send(datas)
	    })
	},

	post: (req, res) => {
		const data = {
			id_transaksi: uuidv4(),
			bukti_pembayaran: req.body.bukti_pembayaran,
			status_transaksi: req.body.status_transaksi,
			total: req.body.total,
			tgl_pesan: req.body.tgl_pesan,
			expired: req.body.expired,
			id_pemesan: req.body.id_pemesan
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
			bukti_pembayaran: req.body.bukti_pembayaran,
			status_transaksi: req.body.status_transaksi,
			total: req.body.total,
			tgl_pesan: req.body.tgl_pesan,
			expired: req.body.expired,
			id_pemesan: req.body.id_pemesan
		}
		knex(table)
		    .where('id_transaksi', req.params.id_transaksi)
		    .update(data)
		    .then(datas =>{
		      res.send('success update : '+ req.params.id_transaksi)
		    })
		    .catch(err =>{
		      res.send('error disini : '+ err)
		    })
	},

	delete: (req, res) => {
	    knex(table)
	    .where('id_transaksi', req.params.id_transaksi)
	    .del()
	    .then(() =>{
	      res.send('success delete : '+ req.params.id_transaksi)
	    })
	    .catch(err =>{
	      res.send('error disini : '+ err)
	    })
	}

}
