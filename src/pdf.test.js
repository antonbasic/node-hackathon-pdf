const { generatePdfFromUrl } = require('./pdf')

describe('pdf library', () => {
  it('should return non empty buffer', async () => {
    const pdf = await generatePdfFromUrl('https://google.com')
    expect(pdf).toBeInstanceOf(Buffer)
  })
})
