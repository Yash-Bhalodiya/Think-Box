import mongoose from "mongoose";

// 1st step: You need to create a schema
// 2nd step: You would create a model based off of that schema

const noteSchema = mongoose.Schema(
    {
        title :{
            typeof:String,
            require:true
        },
        content:{
            typeof:String,
            require:true
        }
        
    },
    { timestamps: true }
)

const Note = mongoose.model("Note",noteSchema)

export default Note