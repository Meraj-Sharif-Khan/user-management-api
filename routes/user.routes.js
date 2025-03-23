import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { blockUsers, deleteUsers, getUsers, unblockUsers } from "../controllers/user.controller.js";
import cors from 'cors'

const router = express.Router();

const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
router.use(cors({
    credentials: true,
    origin: frontendUrl
}))

router.get("/", protectRoute, getUsers);
router.delete("/deleteUsers", protectRoute, deleteUsers);
router.put("/blockUsers", protectRoute, blockUsers);
router.put("/unblockUsers", protectRoute, unblockUsers);

export default router;