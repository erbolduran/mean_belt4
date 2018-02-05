var session = require('express-session'),
        Bid = require('../models/bid');

module.exports = {
    create: (req, res) => {
        const newBid = new Bid(req.body);
        newBid.users.push(session.user_id);
        newBid.save((err) => {
            if (err) {
                return res.status(400).json(err);
            }
            return res.json(newBid)
        });
    },

    getAll: (req, res) => {
        Bid.find({})
        .populate('users')
        .exec((err, bids) => {
            if (err) {
                return res.json(err.errors);
            }
            return res.json(bids)
        });
    },

    getOne: (req, res) => {
        Bid.find({})
        .populate('users')
        .exec((err, bids) => {
            if (err) {
                return res.json(err.errors);
            }
            return res.json(bids)
        });
    }
}