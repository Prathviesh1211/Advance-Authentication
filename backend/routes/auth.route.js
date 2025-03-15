import express from "express"
import { forgotPassword, login, logout, signup, verifyEmail , resetPassword,checkAuth} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router=express.Router();

router.get('/check-auth',verifyToken,checkAuth)

router.post('/signup',signup)
router.post('/verify-email',verifyEmail)
router.post('/forgot-password',forgotPassword)
router.post('/reset-password/:token',resetPassword)
router.post('/login',login)
router.post('/logout',logout)

export default router;