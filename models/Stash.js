var mongoose = require('mongoose');

// Create schema
var StashSchema = new mongoose.Schema({
    project: String,
    title: String,
    client: String,
    user: String,
    published_date: Date,
    amount: Number,
    updated_at: { type: Date, default: Date.now },
});

//Export model with schema
module.exports = mongoose.model('Stash', StashSchema);