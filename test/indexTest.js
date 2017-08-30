let supertest= require('supertest');
let assert = require('chai').assert;
let app = require('../app');
let url = supertest("127.0.0.1:8081");
let sinon = require('sinon');
let coll = require('../model/schema');
let mainstub=sinon.stub(coll,'find');
let mainstub1 = sinon.stub(coll,'update')
let mainstub2 = sinon.stub(coll,'insertMany')
let mainstub3 = sinon.stub(coll,'remove')

describe("Index Router Test",() => {
	beforeEach(()=> {
		//mainstub = sinon.stub(coll,'find');
		mainstub.yields(null,[{username : "root",password : "jasmine",name : "Nihit",age : 22}]);
	})
	it("Response check" , (done) => {
		url.get('/')
		.expect('Content-Type','application/json; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {
			assert.equal(res.body.user[0].username,"root");
			done();
		}
		})
	})
})


describe("Update Router Test",() => {
	beforeEach(()=> {
		mainstub1.withArgs({username : "root"},{$set : {"name" : 'dinesh'}}).yields(null,{ "ok": 1, "nModified": 0, "n": 0});
	})
	it("update Response check" , (done) => {
		url.put('/update')
		.expect('Content-Type','application/json; charset=utf-8')
		.send({username: 'root', name: 'dinesh'})
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {
			assert.equal(res.body.user.ok,1);
			assert.equal(res.body.user.nModified,0);	
			done();
		}
		})
	})
})

describe("Insert Router Test",() => {
	beforeEach(()=> {
		mainstub2.withArgs({username : "nihit", name : "NihitSaxena",age : 22}).yields(null,{username : "nihit", name : "NihitSaxena",age : 22});
	})
	it("insert Response check" , (done) => {
		url.post('/insert')
		.send({username : "nihit", name : "NihitSaxena",age : 22})
		.expect('Content-Type','application/json; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {	
			assert.equal(res.body.user.username,"nihit");
			done();
		}
		})
	})
})


describe("Delete Router Test",() => {
	beforeEach(()=> {
		//mainstub = sinon.stub(coll,'update');
		mainstub3.withArgs({username : "nihit"}).yields(null,{ "ok": 1, "nRemoved": 0, "n": 0});
	})
	it("Delete Response check" , (done) => {
		url.delete('/delete')
		.send({username : "nihit"})
		.expect('Content-Type','application/json; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {	
			assert.equal(res.body.user.ok,1);
			assert.equal(res.body.user.nRemoved,0);
			done();
		}
		})
	})
})

