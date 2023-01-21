const mongoose = require('mongoose')
const validator = require('validator')

const bannerSchema = new mongoose.Schema({


    url: {
        type: String,
    },


})


//Now creating new collection
const BannerModel = new mongoose.model('banners', bannerSchema)
module.exports = BannerModel;
