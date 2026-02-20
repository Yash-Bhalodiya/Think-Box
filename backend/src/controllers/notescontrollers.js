import Note from "../models/Note.js";

export async function getALLnotes(req,res){
    try {
        const notes = await Note.find().sort({createdAt: -1})
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in get: ",error);
        res.status(500).json({meassage: "Internal server error"})
        
    }
}
export async function getnote(req,res){
    try {
        const getednote = await Note.findById(req.params.id)
        if(!getednote) {res.status(404).json({message :"Note not found"})}
        res.status(200).json(getednote)
    } catch (error) {
        console.error("Error in getnote: ",error);
        res.status(500).json({meassage: "Internal server error"})
    }
    
}
export async function createNote(req,res){
    try {
        const {title,content} = req.body;
        const newnote = new Note({title, content})
        await newnote.save()
        res.status(201).json({message : "Note created"})
    } catch (error) {
        console.error("Error in createNote: ",error);
        res.status(500).json({meassage: "Internal server error"})
    }
}

export async function updateNote(req,res){
    try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,{
            new:true
        })
        if(!updatedNote) {res.status(404).json({message :"Note not found"})}
        res.status(200).json({message : "Note updated"})
    } catch (error) {
        console.error("Error in updateNote: ",error);
        res.status(500).json({meassage: "Internal server error"})
    }
}

export async function deleteNote(req,res){
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote)
            {res.status(404).json({message :"Note not found"})}

    
        res.status(200).json({message : "Note deleted"})
    } catch (error) {
        console.error("Error in deleteNote: ",error);
        res.status(500).json({meassage: "Internal server error"})
    }
}