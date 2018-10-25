const request = require('supertest')
const app = require('./app')

describe('GET /pdf', () => {
  it('responds with json and key', async () => {
    const post = await request(app)
      .post('/pdf')
      .send({ url: 'https://google.com' })

    expect(post.get('Content-Type')).toMatch(/json/)
    expect(post.status).toBe(201)
    expect(post.body.key).toBeTruthy()

    const get = await request(app).get(`/pdf/${post.body.key}`)

    expect(get.get('Content-Type')).toMatch(/application\/pdf/)
    expect(get.status).toBe(200)
  })
})
