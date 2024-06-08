const User = require('../models/User')

exports.register = async (req,res)=>{
    try {
        const {Name,UserName,Password} = req.body;

        let user = await User.findOne({UserName});
        
        if(user)
            {
               return  res.status(400).json({
                    success:false,
                    message:"UserName already exists"
                });
            }
        else
            {
                 user = await User.create({Name,UserName,Password});
                 const token = await user.generateToken();
                 
                 res.status(200).cookie("token",token,{path: '/',httpOnly:true,sameSite: 'None',secure: true,expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)}).json({
                    success:true,
                    message:"SignUp Successful!",
                    user:user
                 })
            }
    } catch (error) {
        res
        .status(500)
        .json({
                success:false,
                message:"Server Error",
                errorMessage:error.message
            });
    }
}

exports.login = async(req,res)=>{
    try {
        const{UserName,Password} = req.body;
        
        let user = await User.findOne({UserName});
        if(!user)
            {
                return res.status(400).json({
                    success:false,
                    message:"User does not exist!"
                })
            }
        else{
            
            if(Password == user.Password)
                {
                    const token = await user.generateToken();
                  return  res.status(200).cookie("token",token,{path: '/',httpOnly:true,secure: true,sameSite: 'None',expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)}).json({
                        success:true,
                        message:"LoggedIn Successfully!",
                        user:user
                    })
                }
            res.status(400).json({
                success:false,
                message:"You entered Wrong Password"
            })
        }
    } catch (error) {
        res
        .status(500)
        .json({
                success:false,
                message:"Server Error",
                errorMessage:error.message
            });
    }
}

exports.me = async(req,res)=>{
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        res
        .status(500)
        .json({
                success:false,
                message:"Server Error",
                errorMessage:error.message
            });
    }
}


