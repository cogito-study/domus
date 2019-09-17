import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { CustomerSection, FeatureSection, HeroSection, UseCaseSection } from '../components/sections';
import SEO from '../components/SEO';
import { Layout } from '../components/layout';
import { CookieBanner } from '../components/cookie-banner';

const Index: FunctionComponent<{ data: any }> = ({ data }) => {
  if (!data.allPrismicHome) return null;
  if (!data.allPrismicHomeBodyCookie) return null;

  const cookieNode = data.allPrismicHomeBodyCookie.edges[0].node;
  const { node } = data.allPrismicHome.edges[0];
  const { motto, description, customers_heading, popup_text, popup_title } = node.data;

  return (
    <Layout>
      <SEO />
      <Container>
        <HeroSection
          motto={motto.text}
          description={description.text}
          popupTitle={popup_title.text}
          popupText={popup_text.text}
        />
      </Container>
      <UseCaseSection />

      <Container>
        <FeatureSection />

        {/* <H3 my={[7, 9]} color="neutral.7" textAlign="center">
          {call_to_action.text}
          </H3>*/}
        <CustomerSection title={customers_heading.text} />
      </Container>
      <CookieBanner
        descriptionText={cookieNode.primary.description_text.text}
        buttonText={cookieNode.primary.button_title.text}
      />
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
    allPrismicHomeBodyCookie {
      edges {
        node {
          primary {
            button_title {
              text
            }
            description_text {
              text
            }
          }
        }
      }
    }
  }
`;

export default Index;
