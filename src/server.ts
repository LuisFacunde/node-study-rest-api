import fastify from 'fastify'
import { knexConfig } from './database.js'

const app = fastify()

app.get('/hello', async () => {
  const table = await knexConfig('sqlite_schema').select('*')

  return table
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

// http://localhost:3333/hello - visualizar conteúdo da porta
