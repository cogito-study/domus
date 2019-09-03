import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import {
  CustomerSection,
  FeatureSection,
  HeroSection,
  PartnerSection,
  TryOutSection,
  UseCaseSection,
} from '../components/sections';
import SEO from '../components/SEO';

interface IndexProps {
  data: any;
}

const Index: FunctionComponent<IndexProps> = ({ data }) => {
  if (!data.allPrismicHome) return undefined;

  const { node } = data.allPrismicHome.edges[0];
  const { motto, subtitle, description, call_to_action, customers_heading } = node.data;

  console.log(call_to_action);

  return (
    <>
      <SEO />
      <Container>
        <HeroSection motto={motto.text} subtitle={subtitle.text} description={description.text} />
        <UseCaseSection />
        <FeatureSection />
        {/* <H3 my={[7, 9]} color="grey.dark.2" textAlign="center">
          {call_to_action.text}
          </H3>*/}
        <CustomerSection title={customers_heading.text} />
      </Container>
      <PartnerSection />
      <TryOutSection />
    </>
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
          }
        }
      }
    }
  }
`;

export default Index;
