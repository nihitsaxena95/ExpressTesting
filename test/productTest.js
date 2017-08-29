let supertest= require('supertest');
let assert = require('chai').assert;
let app = require('../app');
let url = supertest("127.0.0.1:8080");
describe("Product Router Test",() => {
	it("Response check" , (done) => {
		url.get('/product')
		.expect('Content-Type','text/html; charset=utf-8')
		.end((err,res) => {
			if(err) {
			console.log(err);
		} else {
			assert.equal(res.text,"in production");
			done();
		}
		})
	})
})