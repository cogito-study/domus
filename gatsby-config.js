require('dotenv').config({
  path: `.env`,
});

const config = {
  siteHeadline: 'Make education a community, not just an institute!', // Headline for schema.org JSONLD
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  keywords:
    'E-learning, Ecourse, Myelearning, Best education, Quality education, Social learning, Blended learning, Group learning, Study guide, Write a note, Sat exam, Gre exam, Collaboration, Collaborative, Collaboration platform, LMS, Learning Management System, Education platform, Teaching platform, Teaching, Education, Teaching strategies, Teach assist, Data management, Research management, Information management, Innovative education, Innovative learning, Future of education, Learning fast, Studying fast, How to study fast, Exam preparation, Free books, Free exam notes, Best exam notes, University notes, College notes, College education, Exam materials, Fun education, Easy learning, Learning styles, University social network, Reliable notes, Validated notes, Up to date books, Motivation to study, Reliable database, Engaging students, Case studies, Learning competition, Award-winning education, Group assignment, Curriculum, University, College, University books, College books, Study videos, Video education, Remote education',
};

module.exports = {
  siteMetadata: {
    siteUrl: `https://cogito.study`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://cogito.study',
        sitemap: 'https://cogito.study/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_ID}`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'domus',
        accessToken: `${process.env.API_KEY}`,
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        url: 'https://cogito.study/',
        titleTemplate: '%s | cogito',
        description:
          'Collaborative course management for reliable online materials and inspiration.',
        languageAlternate: [
          { hrefLang: 'en', href: 'https://cogito.study/en' },
          { hrefLang: 'hu', href: 'https://cogito.study/hu' },
        ],
        openGraph: {
          type: 'website',
          description:
            'Collaborative course management for reliable online materials and inspiration.',
          locale: 'en',
          site_name: 'cogito.study',
          images: [
            {
              url: '/images/og-image.png',
              width: 1200,
              height: 1200,
            },
          ],
        },
        twitter: {
          site: '@cogitostudy',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/src/templates/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cogito',
        short_name: 'Cogito - Collaborative e-learning platform',
        description:
          'Collaborative course management for reliable online materials and inspiration.',
        display: 'standalone',
        icon: 'src/favicon.png',
        start_url: `/`,
        background_color: `#F7FAFC`,
        theme_color: `#002B66`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
