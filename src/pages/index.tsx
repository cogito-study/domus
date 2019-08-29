import { H2 } from '@cogito-study/alea';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import {
  CustomerSection,
  FeatureSection,
  HeroSection,
  PartnerSection,
  TryOutSection,
  UseCaseSection,
} from '../components/sections';
import SEO from '../components/SEO';
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
      <Container>
        <HeroSection motto={motto.text} subtitle={subtitle.text} description={description.text} />
        <UseCaseSection />
        <FeatureSection />
        <H2 color="grey.dark.2" textAlign="center">
          {call_to_action.text}
        </H2>
        <CustomerSection title={customers_heading.text} />
        <PartnerSection />
      </Container>
      <TryOutSection />
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
          }
        }
      }
    }
  }
`;

export default Index;
