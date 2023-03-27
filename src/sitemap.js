const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://www.atiketransportation.com/', {
  filepath: './public/sitemap.xml',
  maxEntriesPerFile: 50000,
  maxDepth: 0,
  stripQuerystring: true
});

// start the generator
generator.start();
