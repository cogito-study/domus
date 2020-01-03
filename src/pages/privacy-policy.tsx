import { graphql } from 'gatsby';
import React from 'react';
import { Container } from '../components/container';
import SEO from '../components/SEO';

const PrivacyPolicy = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <SEO />
      <Container mt={12}>
        <div dangerouslySetInnerHTML={{ __html: data.prismicPrivacyPolicy.data.content.html }} />
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
