import express from "express";
import { getTemplate } from "../constants";

export const router = express.Router();

router.get("/", (req, res) => {
	let path = getTemplate("index.html");
	res.sendFile(path);
});
