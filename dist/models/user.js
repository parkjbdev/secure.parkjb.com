"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    username: String,
    password: String,
    admin: { type: Boolean, default: false }
});
User.statics.create = function (username, password) {
    const user = new this({
        username, password, admin: false
    });
    return user.save();
};
User.statics.findOneByUsername = function (username) {
    return this.findOne({ username }).exec();
};
User.methods.verify = function (password) {
    return this.password === password;
};
User.methods.assignAdmin = function () {
    this.admin = true;
    return this.save();
};
module.exports = mongoose_1.model('User', User);
