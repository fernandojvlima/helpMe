const express = require('express');

const app = express();
const routes = require('./routes');

app.use(express.json())
app.use(routes)

routes.get('/', (request, response) => {
  return response.json({
    nome: "Fernando Lima",
    job: "Developer"
  })
})

routes.post('/ongs', (request, response) => {
  const { name, idade } = request.body;
  const id = 4325
  return response.json({
    idade, name, id
  })
})

app.listen(3333);