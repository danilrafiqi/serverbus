module.exports = {
	getNama : (req, res) => {
		res.json({
			nama:"controllers danil rafiqi"
		})
	},
	getDetail : (req, res) => {
		res.json({
			nama:"ini detail"
		})
	},
	getData:(req, res) => {
		res.json({
			hello:req.params.id
		})
	}
}