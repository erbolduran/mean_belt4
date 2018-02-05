var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [4, 'Length is required.']
    },

    bids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bid'
    }]

}, { timestamps: true});

module.exports = mongoose.model('User', UserSchema);