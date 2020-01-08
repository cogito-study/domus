import { Box } from '@chakra-ui/core';
import { graphql } from 'gatsby';
import React from 'react';
import { Container } from '../components/container';
import SEO from '../components/SEO';
import { StyledContent } from '../components/styled/styled-content';

const TermsConditions = ({ data }: any) => {
  return (
    <>
      <SEO title="Terms & Conditions" />
      <Box position="fixed" h="100vh" w="100vw" backgroundColor="#fff" zIndex={-1} opacity={0.35} />
      <Container mt={24} maxWidth={750} py={60}>
        <StyledContent dangerouslySetInnerHTML={{ __html: data.prismicTermsConditions.data.content.html }} />
      </Container>
    </>
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
