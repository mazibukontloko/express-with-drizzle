import "dotenv/config";

import "./db/index"

import express from "express";
import cors  from "cors";
import { db } from "./db/index"

const app = express();

app.use(cors())
app.use(express.json())

app.get("/api/home", (req, res) => {
    // res.json({message: "message from /api/home"});
    res.json({time: new Date().toUTCString()})
});

app.listen(8081, () => console.log("started express server"));
