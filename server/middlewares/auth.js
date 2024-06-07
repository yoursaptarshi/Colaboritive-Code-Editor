const User = require('../models/User');
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
    try {
        console.log('trying to get token')
        const { token } = req.cookies;
        console.log(req.cookies.token)
        if (!token) {
            console.log('not got token')
            return res.status(401).json({
                erromMessage: "Please login first",
            });
        }
        console.log('got token')
        console.log('jwt check2')
        const decoded = await jwt.verify(token, process.env.JWTSECRET);


        req.user = await User.findById(decoded._id);

        next();
    } catch (error) {
        res.status(500).json({
            message: "Server Error, Authentication Failed",
            errorMessage: error.message
        });
    }
}