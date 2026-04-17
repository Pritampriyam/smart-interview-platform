const jwt = require("jsonwebtoken");
const config = require("../config");

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: "7d",
  });
};