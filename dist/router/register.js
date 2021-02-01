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
    const { username, password } = req.body;
    const create = () => {
        return UserDB_1.default.createUser(username, password);
    };
    const respond = (isAdmin) => {
        res.json({
            message: 'registered successfully',
            admin: isAdmin
        });
    };
    const onError = (error) => {
        res.status(403).json({
            message: error.message
        });
    };
    UserDB_1.default.findOneByUsername(username)
        .then(create)
        .then(() => respond(false))
        .catch(onError);
});
exports.default = { router };
//# sourceMappingURL=register.js.map