import { Box } from '@chakra-ui/core';
import { Location } from '@reach/router';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import { Container } from '../components/container';
import { StyledContent } from '../components/styled/styled-content';
import i18n from '../../config/i18n.js';

const PrivacyPolicy = ({ data, pageContext: { lang } }: any) => {
  return (
    <Location>
      {({ location }) => (
        <>
          <GatsbySeo
            title={i18n[lang].sections.privacy}
            openGraph={{ title: `${i18n[lang].sections.privacy} | cogito`, url: location.href }}
          />
          <Box
            position="fixed"
            h="100vh"
            w="100vw"
            backgroundColor="#fff"
            zIndex={-1}
            opacity={0.35}
          />
          <Container mt={[10, 16]} maxWidth={750} py={60}>
            <StyledContent
              dangerouslySetInnerHTML={{ __html: data.prismicPrivacyPolicy.data.content.html }}
            />
          </Container>
        </>
      )}
    </Location>
  );
};

export const query = graphql`
  query Privacy($lang: String!) {
    prismicPrivacyPolicy(lang: { eq: $lang }) {
      data {
        content {
          html
        }
      }
    }
  }
`;

export default PrivacyPolicy;
