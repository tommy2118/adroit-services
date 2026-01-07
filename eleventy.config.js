export default function(eleventyConfig) {
  // Ignore non-content files
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("node_modules/**");

  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("./src/assets/css/");

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    pathPrefix: "/",
    dir: {
      input: ".",
      includes: "src/_includes",
      data: "src/_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
