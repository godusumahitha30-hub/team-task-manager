const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middleware (order matters)
app.use(cors());
app.use(express.json());

// Debug (optional but useful)
console.log("MONGO_URI:", process.env.MONGO_URI);

// Routes
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/project");

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Start server only after DB connects
const startServer = async () => {
  try {
    await connectDB();

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  } catch (err) {
    console.log("Server Error:", err.message);
  }
};

startServer();