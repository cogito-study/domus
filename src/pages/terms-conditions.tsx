import { graphql } from 'gatsby';
import React from 'react';
import { Container } from '../components/container';
import SEO from '../components/SEO';
import { StyledContent } from '../components/styled/styled-content';

const TermsConditions = ({ data }: any) => {
  return (
    <>
      <SEO title="Terms & Conditions" />
      <Container mt={24}>
        <StyledContent dangerouslySetInnerHTML={{ __html: data.prismicTermsConditions.data.content.html }} />
      </Container>
    </>
  );
};

export const query = graphql`
  query {
    prismicTermsConditions {
      data {
        content {
          html
        }
      }
    }
  }
`;

export default TermsConditions;
