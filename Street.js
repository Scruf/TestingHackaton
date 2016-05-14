var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    streetScheam = new Schema({
        street_name: String,
        url: String
    })
    Street = mongoose.model('New_York',streetScheam);
module.exports = Street;