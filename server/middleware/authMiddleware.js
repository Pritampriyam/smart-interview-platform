const jwt = require("jsonwebtoken");
const config = require("../config");
const BlacklistToken = require("../models/BlacklistToken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({ message: "No token" });

    const token = authHeader.split(" ")[1];

    // check blacklist
    const blacklisted = await BlacklistToken.findOne({ token });
    if (blacklisted)
      return res.status(401).json({ message: "Token expired, login again" });

    const decoded = jwt.verify(token, config.jwtSecret);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};