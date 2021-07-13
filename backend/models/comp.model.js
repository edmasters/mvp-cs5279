const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const compSchema = new Schema({
    totalcomp: {
        type: Number,
        required: true,
        unique: false
    }
});

const Comp = mongoose.model('Comp', compSchema);

module.exports = Comp;