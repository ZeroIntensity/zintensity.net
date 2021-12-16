import express from "express";
import render from "./render";
import { staticFiles } from "./constants";

const app = express();
const port = process.env.PORT || 5000;

app.use("/static", express.static(staticFiles));
render(app);

app.use((req, res, next) => {
	res.status(404).send("Unable to find the requested resource!");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
