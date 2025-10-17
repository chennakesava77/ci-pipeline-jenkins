const request = require('supertest');
const app = require('../src/app');

let server;

beforeAll(() => {
  server = app.listen(3000, () => console.log('Test server running'));
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('responds with Hello, Jenkins CI!', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, Jenkins CI!');
  });
});
