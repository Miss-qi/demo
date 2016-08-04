/**
 * Created by qiyanzi on 16-8-4.
 */
'use strict';
const supertest = require('supertest');
const app = require('../src/server');
const request = supertest(app);
describe('get /query', function () {
    it('should get parameter by query', function (done) {
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

describe('get /params', function () {
    it('should get parameter by params', function (done) {
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