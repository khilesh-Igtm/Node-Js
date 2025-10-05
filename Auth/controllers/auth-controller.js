const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register controller
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already Exist.'
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user'
    })

    await newlyCreatedUser.save();
    if (newlyCreatedUser) {
      res.status(201).json({
        success: true,
        message: 'User registered successfully'
      })
    } else {
      res.status(400).json({
        success: false,
        message: 'Unable to register user please try again.'
      })
    }


  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong.'
    })
  }
}


// login controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Credentials.'
      })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Credentails.'
      })
    }

    // creting user token
    const accessToken = jwt.sign({
      userId: user._id,
      username: user.username,
      role: user.role
    }, process.env.JWT_SECRET_KEY, {
      expiresIn: '15m'
    })

    res.status(200).json({
      sucess: true,
      messaged: 'Logged in successful',
      accessToken
    })


  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong.'
    })
  }
}

module.exports = { loginUser, registerUser }