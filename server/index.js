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
    const values = [req.body.name, req.body.email, req.body.age]
    const newUser = await pool.query(
      `INSERT INTO users(name,email,age)
    VALUES($1,$2,$3)`,
      values
    )
    res.json(newUser)
  } catch (err) {
    console.error(err.message)
  }
})

//GET USERS

//GET SINGLE USER

//UPDATE USER

//DELETE USER

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
