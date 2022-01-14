const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

//CREATE USER
app.post('/users', async (req, res) => {
  try {
    //Values to add
    const values = [req.body.name, req.body.email, req.body.age]
    //Insertion query
    const insertQuery = `INSERT INTO users(name,email,age)
    VALUES($1,$2,$3) RETURNING *`

    //insertion
    const newUser = await pool.query(insertQuery, values)

    //Setting responce
    res.json(newUser.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

//GET USERS

app.get('/users', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users')

    //Setting responce
    res.json(allUsers.rows)
  } catch (err) {
    console.error(err.message)
  }
})

//GET SINGLE USER

//UPDATE USER

//DELETE USER

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
