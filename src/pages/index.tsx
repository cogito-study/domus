import React, { FunctionComponent } from 'react';
import { H1, Box, H2 } from '@cogito-study/alea';
import { Layout } from '../components/layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import { HeroSection, FeatureSection, UseCaseSection, CustomerSection } from '../components/sections';
import { IndexQuery } from '../generated/graphql-types';

interface IndexProps {
  data: IndexQuery;
}

const Index: FunctionComponent<IndexProps> = ({ data }) => {
  if (!data.allPrismicHome) return undefined;

  const { node } = data.allPrismicHome.edges[0];
  const { motto, subtitle, description, call_to_action, customers_heading } = node.data;

  console.log(call_to_action);

  return (
    <Layout>
      <SEO />
      <HeroSection motto={motto.text} subtitle={subtitle.text} description={description.text} />
      <UseCaseSection />
      <FeatureSection />
      <H2 color="grey.dark.2" textAlign="center">
        {call_to_action.text}
      </H2>
      <CustomerSection title={customers_heading.text} />
    </Layout>
  );
};

export const query = graphql`
  query Index {
    allPrismicHome {
      edges {
        node {
          lang
          data {
            subtitle {
              text
            }
            call_to_action {
              text
            }
            customers_heading {
              text
            }
            description {
              text
            }
            motto {
              text
            }
            body {
              ... on PrismicHomeBodyCustomer {
                primary {
                  name {
                    text
                  }
                }
              }
              ... on PrismicHomeBodyFeature {
                primary {
                  description {
                    text
                  }
                  title {
                    text
                  }
                }
              }
              ... on PrismicHomeBodyPartner {
                primary {
                  link {
                    url
                  }
                  name {
                    text
                  }
                }
              }
              ... on PrismicHomeBodyTryOut {
                primary {
                  image {
                    url
                  }
                  image_description {
                    text
                  }
                  subtitle {
                    text
                  }
                  title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;
