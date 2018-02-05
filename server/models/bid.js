var mongoose = require('mongoose');

var BidSchema = new mongoose.Schema({
    bet: {
        type: Number,
        required: [true, "Bid is required."]
    },

    product: {
        type: String,
        required: [true, "Product is required."]
    },

    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Bid', BidSchema)