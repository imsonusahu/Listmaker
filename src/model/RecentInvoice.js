const mongoose = require('mongoose');
const recentInvoice = new mongoose.Schema({


    data:[Object]


}, {skipVersioning: true});

const RecentInvoice = new mongoose.model('recentInvoice', recentInvoice);

module.exports = RecentInvoice;
