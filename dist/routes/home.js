"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var constants_1 = require("../constants");
exports.router = express_1.default.Router();
exports.router.get("/", function (req, res) {
    var path = (0, constants_1.getTemplate)("index.html");
    res.sendFile(path);
});
