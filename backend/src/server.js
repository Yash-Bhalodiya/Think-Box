import express from "express"
import noteroutes from "./routes/noteroutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
dotenv.config()


const app = express()
connectDB()
app.use("/api/notes", noteroutes)


app.listen(5001,()=>{
    console.log("Server is running at Port: 5001")
})

