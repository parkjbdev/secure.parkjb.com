"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection_json_1 = __importDefault(require("./dbConnection.json"));
const UserSchema_1 = require("./schema/UserSchema");
const conn = mongoose_1.default.createConnection(dbConnection_json_1.default.userDB, { useNewUrlParser: true, useUnifiedTopology: true });
conn.once('open', () => {
    console.log(`connected to db server ${conn.host}`);
});
conn.on('error', () => { console.log('error'); });
const model = conn.model('User', UserSchema_1.UserSchema);
exports.default = model;
//# sourceMappingURL=UserDB.js.map