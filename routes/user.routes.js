import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { blockUsers, deleteUsers, getUsers, unblockUsers } from "../controllers/user.controller.js";
import cors from 'cors'

const router = express.Router();


router.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

router.get("/", protectRoute, getUsers);
router.delete("/deleteUsers", protectRoute, deleteUsers);
router.put("/blockUsers", protectRoute, blockUsers);
router.put("/unblockUsers", protectRoute, unblockUsers);

export default router;