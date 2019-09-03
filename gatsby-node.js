const locales = require('./config/i18n');
const { replaceTrailing, localizedSlug, replaceBoth, wrapper } = require('./src/utils/gatsby-node-helpers');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const path = require('path');
  const pages = await graphql(`
    {
      allPrismicBlogPost {
        edges {
          node {
            slugs
          }
        }
      }
    }
  `);

  const template = path.resolve('./src/templates/blog-post.template.tsx');

  pages.data.allPrismicBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slugs[0]}`,
      component: template,
      context: {
        uid: edge.node.slugs[0],
      },
    });
  });
};
