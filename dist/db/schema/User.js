"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    admin: { type: Boolean, default: false }
});
exports.UserSchema.statics.create = function (username, password) {
    const user = new this({
        username, password, admin: false
    });
    return user.save();
};
exports.UserSchema.statics.findOneByUsername = function (username) {
    return this.findOne({ username }).exec();
};
exports.UserSchema.methods.verify = function (password) {
    return this.password === password;
};
exports.UserSchema.methods.assignAdmin = function () {
    this.admin = true;
    return this.save();
};
//# sourceMappingURL=User.js.map