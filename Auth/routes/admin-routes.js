const express = require('express')
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')

router.get('/welcome',authMiddleware,adminMiddleware,(req,res)=>{
  // const {username, userId, role} = req.userInfo;

  res.json({
    message: 'Welcoem to admin orute',
    // user: {
    //   _id: userId,
    //   username,
    //   role
    // }
  })
})


module.exports = router;