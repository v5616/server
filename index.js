const express = require('express')
const app = express()
const hostname = "127.0.0.1"
const port = 3000
var cors = require('cors')
app.use(express.json())
app.use(cors())
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://cluster0.b8wgewo.mongodb.net/",
{
  dbName:"vishal",
  user:"vishal",
  pass:"56162000",
  useNewUrlParser: true,
  useunifiedTopology: true
})
.then(()=>{console.log("mongo connected")})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const  login = require("./routes/login")
app.use("/user",login)

app.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})