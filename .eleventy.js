const {EleventyRenderPlugin} = require('@11ty/eleventy');
const pluginWebc = require('@11ty/eleventy-plugin-webc');
const prettify = require('html-prettify');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = (config) => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  /* Plugins */
  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(pluginWebc, {
    components: 'src/_includes/components/**/*.webc'
  });
  config.addPlugin(syntaxHighlight);

  /* Pass Through File Copy */
  config.addPassthroughCopy('./src/assets/fonts');
  config.addPassthroughCopy('./src/assets/images');
  config.addPassthroughCopy('./src/assets/js/vendor');

  /* Shortcodes */
  config.addPairedShortcode('brace', function (content, type = 'curly') {
    const [opening, closing] = {
      curly: ['{{', '}}'],
      silent: ['{%-', '-%}']
    }[type];
    return `${opening}${content}${closing}`;
  });

  config.addPairedShortcode('prettify', (content) => {
    return prettify(content);
  });

  /* Filters */
  config.addFilter('console', function (value) {
    return JSON.stringify(value, null, 2);
  });

  /* Custom Collections */
  // Filter source file names using a glob
  config.addCollection('dsAtoms', function (collectionApi) {
    return collectionApi.getFilteredByGlob('**/design-system/Atoms/**/*');
  });

  let pathPrefix = '/';
  if (process.env.NODE_ENV == 'production') {
    pathPrefix = '/11ty-design-system/';
  }

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    pathPrefix: pathPrefix,
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
