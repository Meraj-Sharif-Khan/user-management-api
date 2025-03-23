import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import dbConnect from "./db/dbConnect.js";

const PORT = process.env.PORT || 5000
const app = express();

dotenv.config()

app.get('/' , (req, res) => {
    res.send("server is ready!")
})

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth" , authRoutes)
app.use("/api/users" , userRoutes)

app.listen(PORT, ()=> {
    dbConnect();
    console.log(`server running on PORT ${PORT}`)
})