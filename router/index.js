let express = require('express');
let Router = express.Router();
let query = require('./../model/schema');

Router.get('/',(req,res) => {
	query.find({},(err,data) => {
		res.json({user : data});
	
	})
})

module.exports = Router;