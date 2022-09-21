var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    firstName: String, 
    lastName: String,
    password: String,
    email: String,
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);

