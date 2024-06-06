const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    Name: {type:String,required:true},
    UserName: {type:String,required:true,unique:true},
    Password: {type:String,required:true},
    CodeBase:[
        {
            type:mongoose.Schema.Types.ObjectId,ref:'CodeBase'
        }
    ]
})

userSchema.methods.generateToken = function(){
   
    return jwt.sign({ _id: this._id }, process.env.JWTSECRET);
}

module.exports = mongoose.model("User",userSchema);

