const express = require('express');
var albumsRouter = require('./router/albums');
const app = express();
const port = process.env.PORT || 80;

app.use('/albums', albumsRouter);

app.get('/', (req, res) => {
  res.send('Lamestack API Home');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
