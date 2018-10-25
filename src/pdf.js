const puppeteer = require('puppeteer')

async function generatePdfFromUrl (url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  const pdf = await page.pdf({ format: 'A4' })
  await browser.close()
  return pdf
}

module.exports = {
  generatePdfFromUrl,
}
