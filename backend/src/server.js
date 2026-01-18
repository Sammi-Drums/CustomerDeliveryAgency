import express from "express";
import testRoutes from "./routes/testRoutes.js";

const app = express();

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

console.log("Registering /api/test routes...");
app.use("/api/test", testRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
