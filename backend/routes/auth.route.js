import express from "express"
import { forgotPassword, login, logout, signup, verifyEmail } from "../controllers/auth.controller.js";

const router=express.Router();

router.post('/signup',signup)
router.post('/verify-email',verifyEmail)
router.post('/forgot-password',forgotPassword)
router.post('/login',login)
router.post('/logout',logout)

export default router;