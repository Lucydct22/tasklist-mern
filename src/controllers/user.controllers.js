const UserModel =  require("../models/user.model")


const signUp = async (req, res) => {
 const {name, password, email} = req.body
 try {
     const user = await UserModel.create({name, passwrod, email})
res.status(200).send({ data: user})
} catch (error){
  res.status(500).send({ message: error.message})
}
res.status(200).send({message: 'Sing up'})

}




module.exports = {
signup
}