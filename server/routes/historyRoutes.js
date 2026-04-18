const express = require("express");
const jwt = require("jsonwebtoken");
const History = require("../models/History");

const router = express.Router();

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

router.post("/", auth, async (req, res) => {
  try {
    const item = await History.create({
      userId: req.user.id,
      sessionId: req.body.sessionId,
      companyName: req.body.companyName,
      jobTitle: req.body.jobTitle,
      type: req.body.type,
      content: req.body.content,
    });

    res.json(item);
  } catch {
    res.status(500).json({ message: "Save failed" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const items = await History.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(items);
  } catch {
    res.status(500).json({ message: "Fetch failed" });
  }
});

module.exports = router;