const locales = require('./config/i18n')
const {
  replaceTrailing,
  localizedSlug,
  replaceBoth,
  wrapper
} = require('./src/utils/gatsby-node-helpers')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.tsx')
}
