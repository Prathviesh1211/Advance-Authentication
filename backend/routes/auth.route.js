import express from "express"

const router=express.Router();


router.get('/signup',)

router.get('/login',(req,res)=>{
    res.send("Login Route");
})

router.get('/logout',(req,res)=>{
    res.send("Logout Route");
})

export default router;