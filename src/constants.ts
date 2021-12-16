import path from "path";

export const staticFiles = "./public";
export const templates = path.resolve("./templates");

export function getTemplate(template: string): string {
	return path.join(templates, template);
}
