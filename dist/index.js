"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var render_1 = __importDefault(require("./render"));
var constants_1 = require("./constants");
var app = (0, express_1.default)();
var port = process.env.PORT || 5000;
app.use("/static", express_1.default.static(constants_1.staticFiles));
(0, render_1.default)(app);
app.use(function (req, res, next) {
    res.status(404).send("Unable to find the requested resource!");
});
app.listen(port, function () { return console.log("Listening on port ".concat(port, "...")); });
