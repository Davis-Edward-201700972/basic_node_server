const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Software Avanzado - Tarea Práctica 5 - 201700972 - Davis Francisco Edward Enriquez </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
