"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplate = exports.templates = exports.staticFiles = void 0;
var path_1 = __importDefault(require("path"));
exports.staticFiles = "./public";
exports.templates = path_1.default.resolve("./templates");
function getTemplate(template) {
    return path_1.default.join(exports.templates, template);
}
exports.getTemplate = getTemplate;
