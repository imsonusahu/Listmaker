const mongoose = require('mongoose')
const validator = require('validator')

const loginSchema = new mongoose.Schema({


    url: {
        type: String,
    },


})


//Now creating new collection
const loginUser = new mongoose.model('banners', loginSchema)
module.exports = loginUser;
