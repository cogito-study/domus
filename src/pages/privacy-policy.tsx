import { graphql } from 'gatsby';
import React from 'react';
import { Container } from '../components/container';
import SEO from '../components/SEO';
import { StyledContent } from '../components/styled/styled-content';

const PrivacyPolicy = ({ data }: any) => {
  return (
    <>
      <SEO title="Privacy Policy" />
      <Container mt={24}>
        <StyledContent dangerouslySetInnerHTML={{ __html: data.prismicPrivacyPolicy.data.content.html }} />
      </Container>
    </>
  );
};

export const query = graphql`
  query {
    prismicPrivacyPolicy {
      data {
        content {
          html
        }
      }
    }
  }
`;

export default PrivacyPolicy;
