import express from "express"
import noteroutes from "./routes/noteroutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
dotenv.config()


const app = express()


//middlewear
// app.use(express.json()); // this middleware will parse JSON bodies: req.body
// app.use((req,res,next)=>{
//     console.log("We just send a request");
//     next();
// })
app.use("/api/notes", noteroutes)

connectDB().then(()=>{
    app.listen(5001,()=>{
        console.log("Server is running at Port: 5001")
    })
})


