const mongoose = require('mongoose');
const animList = new mongoose.Schema({

    message: {
        type:String
    } ,
    url: {
        type:String
    }
});

const onboarding=new mongoose.model('onboardings',animList);

module.exports=onboarding;