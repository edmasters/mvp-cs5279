const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    jobname: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;