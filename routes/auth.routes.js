import express from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";
import cors from 'cors'

const router = express.Router();


const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
router.use(cors({
    credentials: true,
    origin: frontendUrl
}))


router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router;