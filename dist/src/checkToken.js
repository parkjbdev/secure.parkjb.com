"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signConfig_json_1 = __importDefault(require("../config/signConfig.json"));
const checkToken = (token) => {
    if (!token)
        return false;
    try {
        jsonwebtoken_1.default.verify(token, signConfig_json_1.default.secret);
    }
    catch (err) {
        return false;
    }
    return true;
};
exports.default = checkToken;
//# sourceMappingURL=checkToken.js.map