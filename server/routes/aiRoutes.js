const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ text });
  } catch (error) {
    res.status(500).json({ message: "AI generation failed" });
  }
});

module.exports = router;