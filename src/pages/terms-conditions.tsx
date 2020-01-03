import { graphql } from 'gatsby';
import React from 'react';
import { Container } from '../components/container';
import SEO from '../components/SEO';

const TermsConditions = ({ data }: any) => {
  return (
    <>
      <SEO />
      <Container mt={12}>
        <div dangerouslySetInnerHTML={{ __html: data.prismicTermsConditions.data.content.html }} />
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
