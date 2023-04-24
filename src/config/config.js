const dotenv = require("dotenv"); //2.9k (gzipped; 1.4k)

dotenv.config()

const ENV = process.env.NODE_ENV || "development"

const CONFIG ={
development:{
app:{
PORT: process.env.PORT || 8080
  }
db: {
uri: process.env.MONGODB_URI 
}
},
production:{}
}

module.exports= CONFIG(ENV)