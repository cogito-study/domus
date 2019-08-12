import React, { FunctionComponent } from 'react';
import { H1, Box } from '@cogito-study/alea';
import { Layout } from '../components/layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import { HeroSection } from '../components/sections/hero.section';
import { IndexQuery } from '../generated/graphql-types';
import { UseCaseSection } from '../components/sections/use-case.section';

interface IndexProps {
  data: IndexQuery;
}

const Index: FunctionComponent<IndexProps> = ({ data }) => {
  if (!data.allPrismicHome) return undefined;

  const { node } = data.allPrismicHome.edges[0];
  console.log(node);
  const { motto, subtitle, description } = node.data;

  return (
    <Layout>
      <SEO />
      <HeroSection motto={motto.text} subtitle={subtitle.text} description={description.text} />
      <UseCaseSection />
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
