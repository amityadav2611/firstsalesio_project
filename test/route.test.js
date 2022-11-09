
const app = require("../src/index")
test("Test route endpoint", async () => {
    let rawResult = await fetch("http://localhost:3000/directory/list");
    let result = await rawResult.json(app);
    expect(result?.data?.success).toBe(true);
  });



//   const request = require('supertest')
// const app = require('../server')
// describe('Post Endpoints', () => {
//   it('should create a new post', async () => {
//     const res = await request(app)
//       .post('/api/posts')
//       .send({
//         userId: 1,
//         title: 'test is cool',
//       })
//     expect(res.statusCode).toEqual(201)
//     expect(res.body).toHaveProperty('post')
//   })
// })