import express from "express";
import {currentUser} from '../middlewares/current-user'
import {requireAuth} from '../middlewares/require-auth'
const router = express.Router();

router.get("/api/users/currentuser", currentUser,requireAuth,(req: any, res: any) => {
    res.status(200).json({currentuser:req.currentUser || null})
});

export { router as currentUserRouter };
