require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../utils/db/models");
const { where } = require("sequelize");

JWT_SECRET = process.env.JWT_SECRET;
exports.register = async (req, res) => {
  const { name, surname, dateOfBirth, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      name,
      surname,
      date_of_birth: dateOfBirth,
      username,
      email,
      passwordHash: hashedPassword,
    });
    res.status(201).json({
      message: "User created",
    });
  } catch (error) {
    res.status(400).json({ error: "Something Went Wrong" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      res.status(401).json({ error: "Invalid Email or Password" });
      return;
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    user.token = token;
    await user.save();

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        date_of_bEirth: user.date_of_birth,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.authrization = async (req, res) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const user = await User.findOne({ where: { token } });

    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        date_of_birth: user.date_of_birth,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};