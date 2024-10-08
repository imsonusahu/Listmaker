
const {user} = require("./model/loginApi");


module.exports={
    userValidation:async (req,res,next)=>{

        const value=await user.validate(req.body);

        if (value.error){

            res.json({
                success:0,
                message:value.error.details[0].message
            })
        }else {
            next();
        }
    }
}
