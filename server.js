import express from "express";
import dateRoutes from "./routes/dateRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api",dateRoutes);
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.json({
        message: "Welcome to NepalDate API",
        status: "running"
    });
})

app.get("/test",(req,res)=>{
    res.json({
        message: "Checking push after renaming repo delete later",
        status: "running"
    });
})

export default app;