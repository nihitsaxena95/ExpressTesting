let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Main = new Schema({
	username : String,
	password : String,
	name : String,
	age : Number
},{collection : "coll", versionKey : false});

module.exports = mongoose.model("coll",Main);
