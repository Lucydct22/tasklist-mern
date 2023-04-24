const app= require("./server")
const config= require("./config/config")
const connectDB = requirw("./db/connect")


connectDB().then( async function onServerInit(){
console.log("Database connected")
app.listen(Config.app.PORT,()=>{
console.log("Server is running on port" + Config.app.PORT);
})
})
