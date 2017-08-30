let express = require('express');
let Router = express.Router();
let query = require('./../model/schema');

Router.delete('/',(req,res) => {
	query.remove({"username" : req.body.username},(err,data) => {
		res.json({user : data});
	})
})

module.exports = Router;