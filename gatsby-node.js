const i18n = require('./config/i18n');
const {
  replaceTrailing,
  localizedSlug,
  replaceBoth,
  wrapper,
} = require('./src/utils/gatsby-node-helpers');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: `/`,
    toPath: `/en`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  const path = require('path');
  const pages = await graphql(`
    {
      allPrismicHome {
        edges {
          node {
            alternate_languages {
              lang
            }
          }
        }
      }
      allPrismicAbout {
        edges {
          node {
            alternate_languages {
              lang
            }
          }
        }
      }
      allPrismicFeatureDescription {
        edges {
          node {
            slugs
            lang
          }
        }
      }
      allPrismicContact {
        edges {
          node {
            alternate_languages {
              lang
            }
          }
        }
      }
      allPrismicBlogPost {
        edges {
          node {
            slugs
          }
        }
      }
    }
  `);

  pages.data.allPrismicHome.edges.forEach(({ node }) => {
    const { alternate_languages } = node;
    alternate_languages.forEach(({ lang }) => {
      createPage({
        path: `/${i18n[lang].path}`,
        component: require.resolve(`./src/templates/index.tsx`),
        context: {
          lang,
        },
      });
    });
  });
  pages.data.allPrismicAbout.edges.forEach(({ node }) => {
    const { alternate_languages } = node;
    alternate_languages.forEach(({ lang }) => {
      createPage({
        path: `/${i18n[lang].path}/about`,
        component: require.resolve(`./src/templates/about.tsx`),
        context: {
          lang,
        },
      });
    });
  });

  pages.data.allPrismicContact.edges.forEach(({ node }) => {
    const { alternate_languages } = node;
    alternate_languages.forEach(({ lang }) => {
      createPage({
        path: `/${i18n[lang].path}/contact`,
        component: require.resolve(`./src/templates/contact.tsx`),
        context: {
          lang,
        },
      });
    });
  });

  pages.data.allPrismicFeatureDescription.edges.forEach(({ node }) => {
    createPage({
      path: `/${i18n[node.lang].path}/feature/${node.slugs[0]}`,
      component: require.resolve('./src/templates/blog-post.template.tsx'),
      context: {
        uid: node.slugs[0],
        lang: node.lang,
      },
    });
  });

  pages.data.allPrismicBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slugs[0]}`,
      component: require.resolve('./src/templates/blog-post.template.tsx'),
      context: {
        uid: edge.node.slugs[0],
        lang: 'en-us',
      },
    });
  });
};
