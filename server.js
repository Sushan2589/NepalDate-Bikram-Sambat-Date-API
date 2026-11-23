import express from "express";
import dateRoutes from "./routes/dateRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));




app.use("/api",dateRoutes);

app.get("/",(req,res)=>{
    res.redirect("/index.html");
})

app.get("/test",(req,res)=>{
    res.json({
        message: "Checking push after renaming repo delete later",
        status: "running"
    });
})

export default app;