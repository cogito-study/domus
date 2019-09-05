import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { CustomerSection, FeatureSection, HeroSection, UseCaseSection } from '../components/sections';
import SEO from '../components/SEO';
import { Layout } from '../components/layout';

const Index: FunctionComponent<{ data: any }> = ({ data }) => {
  if (!data.allPrismicHome) return undefined;

  const { node } = data.allPrismicHome.edges[0];
  const { motto, subtitle, description, customers_heading, popup_text, popup_title } = node.data;

  return (
    <Layout>
      <SEO />
      <Container>
        <HeroSection
          motto={motto.text}
          subtitle={subtitle.text}
          description={description.text}
          popupTitle={popup_title.text}
          popupText={popup_text.text}
        />
        <UseCaseSection />
        <FeatureSection />
        {/* <H3 my={[7, 9]} color="grey.dark.2" textAlign="center">
          {call_to_action.text}
          </H3>*/}
        <CustomerSection title={customers_heading.text} />
      </Container>
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
            popup_text {
              text
            }
            popup_title {
              text
            }
          }
        }
      }
    }
  }
`;

export default Index;
