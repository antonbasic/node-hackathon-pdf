const request = require('supertest')
const app = require('./app')

describe('POST /pdf', () => {
  it('takes a url in body and returns a key', async () => {
    // given
    const urlToPDFify = 'https://google.com'

    // when
    const post = await request(app)
      .post('/pdf')
      .send({ url: urlToPDFify })

    // then
    expect(post.status).toBe(201)
    expect(post.get('Content-Type')).toMatch(/json/)
    expect(post.body).toMatchObject({ key: expect.any(String) })
  })

  // TODO: add test for malformed urls

  // TODO: add test for urls not going anywhere e.g. www.gooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooogle.com

  // TODO: add even more tests
})

describe('GET /pdf/:key', () => {
  it('takes a url in body and returns a key', async () => {
    // given
    const urlToPDFify = 'https://google.com'
    const { body: { key } } = await request(app)
      .post('/pdf')
      .send({ url: urlToPDFify })

    // when
    const getPdfResponse = await request(app)
      .get(`/pdf/${key}`)
      .send()

    // then
    expect(getPdfResponse.status).toBe(200)
    expect(getPdfResponse.get('Content-Type')).toMatch(/application\/pdf/)
  })

  it('returns 404 for unknown key', async () => {
    // given
    const key = 'unusedKey'

    // when
    const getPdfResponse = await request(app)
      .get(`/pdf/${key}`)
      .send()

    // then
    expect(getPdfResponse.status).toBe(404)
  })
})
