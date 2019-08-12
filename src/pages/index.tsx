import React, { FunctionComponent } from 'react';
import { H1, Box } from '@cogito-study/alea';
import { Layout } from '../components/layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import { Hero } from '../components/sections/hero';

const Index: FunctionComponent = ({ data }: unknown) => {
  const { motto, subtitle, description } = data.allPrismicHome.edges[0].node.data;

  return (
    <Layout>
      <SEO />
      <Hero motto={motto.text} subtitle={subtitle.text} description={description.text}></Hero>
    </Layout>
  );
};

export const query = graphql`
  {
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
              ... on PrismicHomeBodyUseCase {
                primary {
                  description {
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
