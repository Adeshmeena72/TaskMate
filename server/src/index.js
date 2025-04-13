import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./server.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on("error",(error) => {
        console.log("Error after connecting to MongoDB:: ",error);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port:: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MonogoDB connection FAILED !!!",error)
})
