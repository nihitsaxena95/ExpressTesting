let express = require('express');

let Router = express.Router();	

Router.get('/',(req,res) => {
	res.send("Success");
})

module.exports = Router;