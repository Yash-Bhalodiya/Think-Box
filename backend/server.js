import express from "express"

const app = express()
app.get("/api/notes",(req,res)=>{
    res.send("respone send to client")
});

app.post("/api/notes",(req,res)=>{
    res.status(201).json({message:"Note create successfully"})
});

app.put("/api/notes/:id",(req,res)=>{
    res.status(200).json({message:"Note updated successfully"})
});

app.delete("/api/notes/:id",(req,res)=>{
    res.status(201).json({message:"Note deleted successfully"})
});


app.listen(5001,()=>{
    console.log("Server is running at Port: 5001")
})