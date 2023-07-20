const UserDetailModel = require("../models/userDetail");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

//Creating user Register Function
// steps => existing user check
// password hashing
// new user creation
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // existing user check
    const existingUser = await UserDetailModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists !!" });
    }
    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // new user create
    const result = await UserDetailModel.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: " User Registered Succesfully !!!" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Something went wrong while Registering !!!" });
  }
};

//creating Login function
//existing user check
//credential verification
//token generation
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserDetailModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found !!!" });
    }
    const matchPassword = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid credentials !!" });
    }
    //token generation
    const token = jwt.sign(
      { email: existingUser.email, userId: existingUser._id },
      SECRET_KEY
    );
    res.status(200).json({
      message: "User logged in successfully",
      user: existingUser,
      token: token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong while login !!!" });
  }
};
module.exports = { register, login };
