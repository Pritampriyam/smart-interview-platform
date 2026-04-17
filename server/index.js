const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const config = require("./config");
const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protected");
const uploadRoutes = require("./routes/uploadRoutes");
const historyRoutes = require("./routes/historyRoutes");
const rateLimit = require("express-rate-limit");



const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { message: "Too many requests, try again later." },
});
app.use(limiter);

// DB
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/history", historyRoutes);



app.get("/", (req, res) => {
  res.send(`Backend running in ${config.nodeEnv} mode 🚀`);
});

console.log("User Model Loaded:", User.modelName);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});