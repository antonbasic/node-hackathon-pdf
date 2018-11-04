const express = require('express')
const bodyParser = require('body-parser')
const dbFactory = require('./db')
const uuid = require('uuid/v4')
const { generatePdfFromUrl } = require('./pdf')

const app = express()
app.use(bodyParser.json())

const db = dbFactory()

app.post('/pdf', async (req, res, next) => {
  const error = new Error('Not implemented')
  error.status = 501
  next(error)
})

app.get('/pdf/:key', (req, res, next) => {
  const error = new Error('Not implemented')
  error.status = 501
  next(error)
})

app.use('/ping', (req, res) => {
  res
    .status(200)
    .json({
      body: req.body,
      queryParams: req.query,
      path: req.path,
    })
})

// Handle errors
app.use((err, req, res, next) => {
  if (!err.status) {
    return res.status(500).send(err.message)
  }
  return res.status(err.status).send(err.message)
})

module.exports = app
