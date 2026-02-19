import mongooes from "mongoose"


export const connectDB = async()=>{
    try {
       await mongooes.connect(process.env.MONGO_URL);
       console.log("Connected to Database");
       
       
    } catch (error) {
        console.error("Error in connecting to DB: ",error)
    }
}
