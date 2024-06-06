const mongoose = require('mongoose')


const CodeBaseSchema = new mongoose.Schema({
    Title:{type:String,required:true},
    Language:{type:String,required:true},
    Versions:[{
        Content:String,
        CreatedAt:{type:Date,default:Date.now}
    }],
    Collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model("CodeBase",CodeBaseSchema)