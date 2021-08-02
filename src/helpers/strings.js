export function capitalize(string) {
	return string
		.split(" ")
		.map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
		.join(" ");
}

export function snakeCase(string) {
	return string
		.split(" ")
		.map((chunk) => chunk.charAt(0).toLowerCase() + chunk.slice(1))
		.join("_");
}
