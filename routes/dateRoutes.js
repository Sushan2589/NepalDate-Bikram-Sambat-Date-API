import express from "express";
import { convertAdToBs, convertBsToAd } from "../converter.js";
const router = express.Router();

router.get("/today",(req,res)=>{ //getting today ko nepali date
    res.json({
        message: "Nepali Date Today",
    })
})

router.get("/ad-bs",(req,res)=>{ //converting AD TO BS 
    const { date } = req.query;
    try{
        const convertedDate = convertAdToBs(date);
        res.json({
        message: "AD to BS Conversion",
        date: convertedDate
    })
    }
    catch(error){
        res.status(400).json({
            message: error.message
        })
    }
    
})

router.get("/bs-ad",(req,res)=>{ //Converting BS TO AD
    const { date } = req.query;

    try{
        const convertedDate = convertBsToAd(date);
        res.json({
        message: "BS to AD Conversion",
        date: convertedDate.toISOString().split("T")[0]
    })
    }
    catch(error){
        res.status(400).json({
            message: error.message
        })
    }
})


export default router;