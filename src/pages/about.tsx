import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { AchievementSection, CustomerSection, TeamSection } from '../components/sections';
import SEO from '../components/SEO';

const About: FunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Container mt={10}>
        <TeamSection
          title={data.allPrismicAbout.edges[0].node.data.title.text}
          subtitle={data.allPrismicAbout.edges[0].node.data.subtitle.text}
        />
        <AchievementSection title={data.allPrismicAbout.edges[0].node.data.achievement_header.text} />
        <CustomerSection title={data.allPrismicHome.edges[0].node.data.customers_heading.text} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query About {
    allPrismicAbout {
      edges {
        node {
          lang
          data {
            title {
              text
            }
            subtitle {
              text
            }
            achievement_header {
              text
            }
          }
        }
      }
    }
    allPrismicHome {
      edges {
        node {
          lang
          data {
            customers_heading {
              text
            }
          }
        }
      }
    }
  }
`;
export default About;
