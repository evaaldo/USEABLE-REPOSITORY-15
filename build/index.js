"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
exports.app = (0, express_1.default)();
exports.app.listen(3000, () => console.log("App is running..."));
exports.app.use(express_1.default.json());
exports.app.use(routes_1.router);
