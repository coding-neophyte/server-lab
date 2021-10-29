const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('response should return the word hi',  async() => {
    const res = await request(app).get('/');

    expect(res.text).toEqual('hi');
  });

  it('response should return the word red',  async() => {
    const res = await request(app).get('/red');


    expect(res.text).toEqual('<h1> red </h1>');
  });

  it('response should return the word green',  async() => {
    const res = await request(app).get('/green');


    expect(res.text).toEqual('<h1> green </h1>');
  });

  it('response should return the word blue',  async() => {
    const res = await request(app).get('/blue');


    expect(res.text).toEqual('<h1> blue </h1>');
  });

  it('response should return ',  async() => {
    const res = await request(app).post('/echo');


    expect(res.text).toEqual('');
  });

});
