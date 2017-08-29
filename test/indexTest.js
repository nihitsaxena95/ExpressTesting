let supertest= require('supertest');
let assert = require('chai').assert;
let app = require('../app');
let url = supertest("127.0.0.1:8080");
describe("Index Router Test",() => {
	it("Response check" , (done) => {
		url.get('/')
		.expect('Content-Type','text/html; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {
			assert.equal(res.text,"Success");
			done();
		}
		})
	})
})