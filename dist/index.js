"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("./router/login"));
const register_1 = __importDefault(require("./router/register"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', (req, res, next) => {
    console.log(req.ip, ':', req.method, req.originalUrl);
    next();
});
app.use('/login', login_1.default.router);
app.use('/register', register_1.default.router);
app.listen(port, () => {
    console.log('listening');
});
//# sourceMappingURL=index.js.map