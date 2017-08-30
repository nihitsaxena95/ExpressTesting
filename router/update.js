let express = require('express');
let Router = express.Router();
let query = require('./../model/schema');

Router.put('/',(req,res,next) => {
	query.update({"username" : req.body.username},{$set : {"name" : req.body.name}},(err,data) => {
		res.json({user : data});
		next();
	})
})

module.exports = Router;