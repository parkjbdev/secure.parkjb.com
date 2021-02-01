"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    admin: { type: Boolean, default: false }
});
UserSchema.statics.create = function (username, password) {
    const user = new this({
        username, password, admin: false
    });
    return user.save();
};
UserSchema.statics.findOneByUsername = function (username) {
    return this.findOne({ username }).exec();
};
UserSchema.methods.verify = function (password) {
    return this.password === password;
};
UserSchema.methods.assignAdmin = function () {
    this.admin = true;
    return this.save();
};
const UserModel = mongoose_1.model('User', UserSchema);
exports.default = UserModel;
//# sourceMappingURL=User.js.map