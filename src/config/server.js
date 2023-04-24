const express = require("express")
const helmet = require("helmet");// 9.6k (gzipped, 3.1k)
const morgan = require( "morgan");// 13.8k (gzipped, 5.1k)
const userRoutes = require("./routes/user.routes")

const app = express() 

app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())
app.use("/user, userRoutes")

module.exports = app 
