let express = require('express');
let Router = express.Router();
let query = require('./../model/schema');

Router.post('/',(req,res) => {
	query.insertMany({"username" : req.body.username, "name" : req.body.name, "age" : req.body.age},(err,data) => {
		res.json({user : data});
	})
})

module.exports = Router;