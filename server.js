const express = require('express')
const userRoute = require('./routes/user/userRoute')
const houseRoute = require('./routes/house/houseRoute')
require('dotenv').config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT | 3001

const v1Router = express.Router()
v1Router.use('/user', userRoute)
v1Router.use('/house', houseRoute)

app.use('/v1', v1Router)

app.listen(PORT, () => {
  console.log('Server runs on PORT:', PORT)
})