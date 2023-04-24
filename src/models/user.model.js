const {Schema, model} = require("mongoose") //939.1k (gzipped:227.2k)

const UserSchema = new Schema({
name: {
type: String,
required: [true, "Please provide a name"],

password: {
type:String,
required: [true, "Please provide a password"],
},

email: {
trype: String,
required: [true, "Please provide an email"]
}
}
})

const userModel = model("User", UserSchema)

module.exports = UserModel 