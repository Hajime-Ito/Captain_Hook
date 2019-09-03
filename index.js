const functions = require('firebase-functions')
const express = require('express')
const ejs = require("ejs")
const app = express()

app.engine('ejs', ejs.renderFile)
app.set('views', './public/views')
app.set('view engine', 'ejs')

app.get('/TMPHUGA/:id*', (request, response) => {
  response.send('予約、了解したぜ。このURLを用意したから踏んでくれよな\n https://xxx.com/TMPHUGA/' + request.params.id)
  response.end()
})

app.get('/TMPHUGA/:id*', (request, response) => {
  response.render('bookCR', {
    room: request.params.id
  })
  response.end()
})

exports.app = functions.https.onRequest(app)