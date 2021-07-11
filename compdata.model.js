const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let compdata = new Schema({
    job_title: {
        type: String
    },
    total_comp: {
        type: Int
    }
});
module.exports = mongoose.model('compdata', compData);