const mongoose = require('mongoose');
const plumberItems = new mongoose.Schema({

    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    type: {
        type: String
    }
}, {skipVersioning: true});

const PlumberApi = new mongoose.model('plumberItems', plumberItems);

module.exports = PlumberApi;
