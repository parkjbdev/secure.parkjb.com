"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const signConfig_json_1 = __importDefault(require("../../config/signConfig.json"));
const crypto_1 = __importDefault(require("crypto"));
exports.UserSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    password: String,
    admin: { type: Boolean, default: false }
});
const encrypt = function (password) {
    return crypto_1.default.createHmac('sha1', signConfig_json_1.default.secret)
        .update(password).digest('base64');
};
exports.UserSchema.statics.createUser = function (username, password) {
    const user = new this({
        username, password: encrypt(password), admin: false
    });
    return user.save();
};
exports.UserSchema.statics.findOneByUsername = function (username) {
    return this.findOne({ username }).exec();
};
exports.UserSchema.methods.verify = function (password) {
    return this.password === encrypt(password);
};
exports.UserSchema.methods.assignAdmin = function () {
    this.admin = true;
    return this.save();
};
//# sourceMappingURL=UserSchema.js.map