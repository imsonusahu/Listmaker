const mongoose = require('mongoose');
const plumberItems = new mongoose.Schema({

    title: {
        type: String
    },
    type: {
        type: Array
    }
});

const PlumberApi = new mongoose.model('plumberItems', plumberItems);

module.exports = PlumberApi;
