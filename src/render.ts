import fs from "fs";
import path from "path";
import express from "express";

const routes = path.join(__dirname, "routes");

export default function (app: express.Application) {
	const files = fs.readdirSync(routes);

	files.forEach(file => {
		let mod = require(`${routes}/${file}`);
		app.use("", mod.router);
	});
}
