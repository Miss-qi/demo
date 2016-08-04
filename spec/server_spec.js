/**
 * Created by qiyanzi on 16-8-4.
 */
'use strict';
const supertest = require('supertest');
const app = require('../src/server');
const request = supertest(app);
describe('get /query', ()=> {
    it('should get parameter by query', (done) => {
        request
            .get('/query')
            .query({name: 'Tom'})
            .expect('Tom')
            .end((err, res) => {
                if (err) {
                    done.fail(err);
                } else {
                    done();
                }
            });
    });
});

describe('get /params', ()=> {
    it('should get parameter by params', (done)=> {
        request
            .get('/params/Tom')
            .expect({name: 'Tom'})
            .end((err, res)=> {
                if (err) {
                    done.fail(err);
                } else {
                    done();
                }
            });
    });
});

describe('post /header', ()=> {
    it('should get parameter by header', (done)=> {
        request
            .post('/header')
            .set({name: 'jan'})
            .expect('jan')
            .end((err, res)=> {
                if (err) {
                    done.fail(err);
                } else {
                    done();
                }
            });
    });
});

describe('post /body', function () {
    it('should get param by body', function (done) {
        request
            .post('/user')
            .send({name: 'dudu'})
            .expect('dudu')
            .end((err, res) => {
                if (err) {
                    done.fail(err);
                } else {
                    done();
                }
            })
    });
});