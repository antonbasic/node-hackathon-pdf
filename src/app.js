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

app.get('/pdf/:key', (req, res, next) => {
  res.set('Content-Type', 'application/pdf')
  const toReturn = db.get(req.params.key)
  if (toReturn === undefined) {
    const error = new Error(`Document for key ${req.params.key} is not found`)
    error.status = 404
    return next(error)
  }
  res.send()
})

app.use((err, req, res, next) => {
  if (!err.status) {
    return res.status(500).send(err.message)
  }
  return res.status(err.status).send(err.message)
})

module.exports = app
