const mongoose = require('mongoose'); //839.1k (gzipped: 227.2k)
const config = require("../config/config")

function connectDB(){
return mongoose.connect(Config.db.uri)
}

module.exports = connectDB


