"use strict";
<<<<<<< HEAD
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("./models/server");
//Setting dot.env:
dotenv_1.default.config();
const server = new server_1.Server();
server.listen();
=======
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
exports.name = 'Cristian';
console.log(exports.name);
>>>>>>> 2a6e1682e49db3f63a666719011f04397ae264c7
//# sourceMappingURL=app.js.map