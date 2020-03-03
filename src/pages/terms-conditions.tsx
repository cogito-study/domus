import { Box } from '@chakra-ui/core';
import { Location } from '@reach/router';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import { Container } from '../components/container';
import { StyledContent } from '../components/styled/styled-content';

const TermsConditions = ({ data }: any) => {
  return (
    <Location>
      {({ location }) => (
        <>
          <GatsbySeo
            title="Terms & Conditions"
            openGraph={{ title: 'Terms & Conditions', url: location.href }}
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
              dangerouslySetInnerHTML={{ __html: data.prismicTermsConditions.data.content.html }}
            />
          </Container>
        </>
      )}
    </Location>
  );
};

export const query = graphql`
  query {
    prismicTermsConditions(lang: { eq: "en-us" }) {
      data {
        content {
          html
        }
      }
    }
  }
`;

export default TermsConditions;
