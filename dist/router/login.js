"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserDB_1 = __importDefault(require("../db/UserDB"));
const signConfig_json_1 = __importDefault(require("../config/signConfig.json"));
const router = express_1.default.Router();
router.route('/')
    .post((req, res) => {
    const { userid, password } = req.body;
    const check = (user) => {
        if (!user)
            throw new Error('login failed');
        if (!user.verify(password))
            throw new Error('login failed');
        const payload = {
            _id: user._id,
            username: user.username,
            userid: user.userid,
            admin: user.admin,
        };
        const secret = signConfig_json_1.default.secret;
        const signOptions = signConfig_json_1.default.signOptions;
        return new Promise(((resolve, reject) => {
            jsonwebtoken_1.default.sign(payload, secret, signOptions, (err, encoded) => {
                if (err)
                    reject(err);
                if (encoded)
                    resolve(encoded);
                else
                    reject('encoded undefined');
            });
        }));
    };
    const respond = (token) => {
        res.json({
            message: 'logged in successfully',
            token
        });
    };
    const onError = (error) => {
        res.status(403).json({
            message: error.message
        });
    };
    UserDB_1.default.findOneByUserId(userid)
        .then(check)
        .then(respond)
        .catch(onError);
});
exports.default = { router };
//# sourceMappingURL=login.js.map