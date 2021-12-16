"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var routes = path_1.default.join(__dirname, "routes");
function default_1(app) {
    var files = fs_1.default.readdirSync(routes);
    files.forEach(function (file) {
        var mod = require("".concat(routes, "/").concat(file));
        app.use("", mod.router);
    });
}
exports.default = default_1;
