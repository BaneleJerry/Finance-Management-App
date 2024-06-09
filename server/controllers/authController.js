require("dotenv").config();
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const { User } = require("../utils/db/models");

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
    console.log(newUser); // Add this line to log newUser
    res.status(201).json({
      message: "User created",
      user: newUser,
    });
  } catch (error) {
    console.error(error); // Log any error that occurs during user creation
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
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
