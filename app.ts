import "dotenv/config";

import "./db/index"

import express from "express";
import cors  from "cors";
import { db } from "./db/index"
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

const app = express();

app.use(cors())
app.use(express.json())

app.get("/api/home", async (req, res) => {
    try {
        const uss = await db.select().from(users)
        console.log("uss - ", uss)
        res.json(uss)
    } catch (error) {
        console.error("get error", error)
        res.status(500).json({message: "internal server error!"})
    }
});

app.post("/api/home", async (req, res) => {
    try {
        // console.log("req -- ", req.body.first_name)
        const first = req.body.first
        const last = req.body.last
        await db.insert(users).values({firstName: first, lastName: last})
        const uss = await db.select().from(users)
        res.json(uss)
    } catch (error) {
        console.error("post error", error)
        res.status(500).json({message: "internal server error!"})
    }
});

app.put("/api/home", async (req, res) => {
    try {
        // console.log("req -- ", req.body.first_name)
        const id = req.body.id
        const first = req.body.first
        const last = req.body.last
        await db.update(users).set({firstName: first, lastName: last})
            .where(eq(users.id, id))
        const uss = await db.select().from(users)
        res.json(uss)
    } catch (error) {
        console.error("put error", error)
        res.status(500).json({message: "internal server error!"})
    }
});

app.delete("/api/home", async (req, res) => {
    try {
        const id = req.body.id
        await db.delete(users).where(eq(users.id, id))
        const uss = await db.select().from(users)
        res.json(uss)
    } catch (error) {
        console.error("delete error", error)
        res.status(500).json({message: "internal server error!"})
    }
});

app.listen(8081, () => console.log("started express server"));
