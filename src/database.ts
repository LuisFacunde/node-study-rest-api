import knex from 'knex'

export const knexConfig = knex({
  client: 'sqlite3',
  connection: {
    filename: './temp/app.db',
  },
})
