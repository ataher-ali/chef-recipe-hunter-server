const express = require('express')
const app = express()
const port = 1010

app.get('/', (req, res) => {
  res.send('Welcome to  🍕🍜 restaurant 📡 server ! ') 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})