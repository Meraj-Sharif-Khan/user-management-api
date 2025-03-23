import express from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";
import cors from 'cors'

const router = express.Router();


router.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))


router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router;