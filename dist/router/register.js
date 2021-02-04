"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserDB_1 = __importDefault(require("../db/UserDB"));
const router = express_1.default.Router();
router.route('/')
    .post((req, res) => {
    const { userid, username, password } = req.body;
    const create = () => UserDB_1.default.createUser(userid, username, password);
    const respond = (user) => {
        res.json({
            message: 'registered successfully',
            user
        });
    };
    const onError = (error) => {
        res.status(403).json({
            message: error.message
        });
    };
    UserDB_1.default.findOneByUserId(userid)
        .then(create)
        .then(respond)
        .catch(onError);
});
exports.default = { router };
//# sourceMappingURL=register.js.map