import sitemap from "@quasibit/eleventy-plugin-sitemap";

export default function(eleventyConfig) {
  // Ignore non-content files
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("node_modules/**");

  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("./src/assets/css/");

  // Sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://adroit-services.com",
    },
  });

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Filters
  eleventyConfig.addFilter("truncate", (str, length) => {
    if (!str) return "";
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
  });

  eleventyConfig.addFilter("date", (date, format) => {
    const d = new Date(date);
    if (format === "%Y-%m-%d") {
      return d.toISOString().split('T')[0];
    }
    if (format === "%Y-%m-%dT%H:%M:%SZ") {
      return d.toISOString();
    }
    if (format === "%B %d, %Y") {
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return d.toLocaleDateString();
  });

  eleventyConfig.addFilter("first", (arr, n) => {
    if (!arr) return [];
    return arr.slice(0, n);
  });

  eleventyConfig.addFilter("reject", (arr, key, value) => {
    if (!arr) return [];
    return arr.filter(item => {
      const itemValue = key.split('.').reduce((obj, k) => obj && obj[k], item);
      return itemValue !== value;
    });
  });

  eleventyConfig.addFilter("last", (arr) => {
    if (!arr || !arr.length) return null;
    return arr[arr.length - 1];
  });

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
