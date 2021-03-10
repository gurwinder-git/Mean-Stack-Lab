const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('welcome to mean stack name = Gurwinder Singh ,U.R.N = 1905420')
})

app.get('/about', (req, res) => {
  res.send('This is about page')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

