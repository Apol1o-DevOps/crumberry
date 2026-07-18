export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
}
