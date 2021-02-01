"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signConfig_json_1 = __importDefault(require("./signConfig.json"));
const router = express_1.default.Router();
router.route('/')
    .get((req, res) => {
    const token = req.headers['x-access-token'] || req.query.token;
    if (!token)
        return res.status(403).json({
            success: false,
            message: 'not logged in'
        });
    const p = new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, signConfig_json_1.default.secret, ((err, decoded) => {
            if (err)
                reject(err);
            resolve(decoded);
        }));
    });
    const respond = (token) => {
        res.json({
            success: true,
            info: token
        });
    };
    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        });
    };
    p.then(respond).catch(onError);
    return;
});
exports.default = { router };
//# sourceMappingURL=check.js.map