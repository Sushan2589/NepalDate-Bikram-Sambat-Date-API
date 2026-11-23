import express from "express";

const router = express.Router();

router.get("/today",(req,res)=>{ //getting today ko nepali date
    res.json({
        message: "Nepali Date Today",
    })
})

router.get("/ad-bs",(req,res)=>{ //converting AD TO BS 
    const { date } = req.query;

    res.json({
        message: "AD to BS Conversion",
        date: date
    })
})

router.get("/bs-ad",(req,res)=>{ //Converting BS TO AD
    const { date } = req.query;

    res.json({
        message: "BS to AD Conversion",
        date: date
    })
})


export default router;