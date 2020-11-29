const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    gender: String
});
const UsersData = mongoose.model('Users', UsersSchema);

module.exports = UsersData;