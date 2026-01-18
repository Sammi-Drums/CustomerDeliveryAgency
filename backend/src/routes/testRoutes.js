import express from "express";

const router = express.Router();

console.log("testRoutes.js loaded");

router.get("/ping", (req, res) => {
    console.log("GET /api/test/ping called");
    res.json({ message: "pong" });
});

export default router;