const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  password: '85906600',
  host: 'localhost',
  port: 5432,
  database: 'user_db',
})

module.exports = pool
