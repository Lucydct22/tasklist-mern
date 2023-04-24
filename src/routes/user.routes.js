const userRoutes= require("express").Router()

const {signUp}= require("../controllers/user.controllers")


userRouter.post("/signup", signup)

module.exports = userRouter