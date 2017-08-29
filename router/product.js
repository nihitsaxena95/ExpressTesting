let express = require('express');

let router = express.Router();

router.get('/',(req,res) => {
	res.send("in production");
})
module.exports = router;	
