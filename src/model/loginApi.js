const mongoose = require('mongoose')
const validator = require('validator')

const loginSchema = new mongoose.Schema({


    name: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    gid: {
        type: String,
        required: true
    },

    profile: {
        type: String,
        required: true
    },
    firebase_token: {
        type: String,
        required: true
    }



})


//Now creating new collection
const loginUser = new mongoose.model('allUsers', loginSchema)
module.exports = loginUser;
