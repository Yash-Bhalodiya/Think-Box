import express from "express"
import { createNote, deleteNote, getALLnotes, getnote, updateNote } from "../controllers/notescontrollers.js"
const router = express.Router()

router.get("/",getALLnotes)
router.get("/:id",getnote)
router.post("/",createNote)

router.put("/:id",updateNote)

router.delete("/:id",deleteNote)


export default router
