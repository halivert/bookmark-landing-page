export function capitalize(string) {
	return string
		.split(" ")
		.map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
		.join(" ");
}
