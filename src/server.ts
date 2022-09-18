import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('olá')
  res.send('hello')
})

app.listen(3333)
