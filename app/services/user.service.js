const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  registerUserService: async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      return res.json({ message: "All inputs are required!" }).status(400);
    }

    const old_user = await User.findOne({ email });
    if (old_user) {
      return res.json({ message: "User already exists!" }).status(400);
    }

    const password_encrypted = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email.toLowerCase(),
      password: password_encrypted,
    });

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

    user.token = token;

    return res.json({ message: "User created!", data: user }).status(201);
  },
};
