

// register controller
const registerUser = async(req,res)=>{
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message: 'Something went wrong.'
    })
  }
}


// login controller
const loginUser = async(req,res)=>{
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message: 'Something went wrong.'
    })
  }
}

module.exports = {loginUser, registerUser}