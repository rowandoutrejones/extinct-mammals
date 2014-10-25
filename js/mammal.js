var mongoose = require('mongoose');

// SCHEMA
// var mammalSchema = mongoose.Schema({
//     name: String,
//     type: String,
//     year_extinct: Number
// })

var ExtinctMammal = mongoose.model('ExtinctMammal', new mongoose.Schema({
    name: String,
    type: String,
    year_extinct: Number
}));

module.exports = ExtinctMammal;