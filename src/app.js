const express = require('express')
const bodyParser = require('body-parser')
const dbFactory = require('./db')
const uuid = require('uuid/v4')
const { generatePdfFromUrl } = require('./pdf')

const db = dbFactory()

const app = express()

app.use(bodyParser.json())

app.post('/pdf', async (req, res) => {
  const pdf = await generatePdfFromUrl(req.body.url)
  const key = uuid()
  db.store(key, pdf)

  res.status(201).json({
    key,
  })
})

app.get('/pdf/:key', (req, res) => {
  res.set('Content-Type', 'application/pdf')
  res.send(db.get(req.params.key))
})

module.exports = app
