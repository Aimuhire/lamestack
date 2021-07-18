const express = require('express')
var albumsRouter = require('./router/albums')



const app = express()
const port = 3000

app.use('/albums', albumsRouter)

app.get('/', (req, res) => {
  res.send('Lamestack API Home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})