module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		"src/css/fonts": "/css/fonts",
	});
	eleventyConfig.addPassthroughCopy({
		"src/images": "/images",
	});
	eleventyConfig.addPassthroughCopy({
		"src/css/style.css": "/css/style.css",
	});
	eleventyConfig.addPassthroughCopy({
		"src/css/fonts.css": "/css/fonts.css",
	});
	eleventyConfig.addPassthroughCopy({
		"src/css/logo.svg": "/css/logo.svg",
	});
	eleventyConfig.addPassthroughCopy({
		"src/images/favicon.png": "/images/favicon.png",
	});
	eleventyConfig.addPassthroughCopy({
		"src/*.js": "/*.js",
	});
	return {
		passthroughFilecopy: true,
		dir: {
			input: "src",
			output: "public",
		},
	};
};
