const User = require("../models/user");
const SuccessHandler = require("../utils/SuccessHandler");
const ErrorHandler = require("../utils/ErrorHandler");

// signup
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return ErrorHandler("User does not exist", 400, req, res);
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return ErrorHandler("Invalid credentials", 400, req, res);
    }

    return SuccessHandler(
      { message: "Logged in successfully", userData: user },
      200,
      res
    );
  } catch (error) {
    return ErrorHandler(error.message, 500, req, res);
  }
};

//logout
const logout = async (req, res) => {
  try {
    req.user = null;
    return SuccessHandler("Logged out successfully", 200, res);
  } catch (error) {
    return ErrorHandler(error.message, 500, req, res);
  }
};

module.exports = {
  signup,
  login,
  logout,
};
