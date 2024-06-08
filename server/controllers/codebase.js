const CodeBase = require('../models/CodeBase')
const User = require('../models/User')
exports.saveCode = async(req,res)=>{
    try {
        const {Title,Language,Code} = req.body;
        
        const user = await User.findById(req.user._id);
        
        if(!user)
            {
                return res.status(400).json({
                    success:false,
                    message:"Please Login to Save Codes"
                })
            }
        if(!Title || !Language || !Code)
            {
                return res.status(400).json({
                    success:false,
                    message:"Please enter Title to Proceed"
                })
            }
            const code = await CodeBase.create({
                Title:Title,
                Language:Language
            })
            code.Versions.push({Content:Code});
            code.Collaborators.push(req.user._id)
            await code.save();
            user.CodeBase.push({codeBaseId:code._id,title:Title,language:Language})
            await user.save();

            res.status(200).json({
                success:true,
                message:"Code saved Successfully"
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

exports.findCode = async(req,res)=>{
    try {
       const {codeId,versionId} = req.query;
       
       const code = await CodeBase.findById(codeId);
       
       if(versionId)
        {
            const codeVersion = code.Versions.id(versionId);
            return res.status(200).json({
                success:true,
                codeVersion
               })
        }
       res.status(200).json({
        success:true,
        code
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