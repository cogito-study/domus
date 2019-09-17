import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { AchievementSection, TeamSection } from '../components/sections';
import SEO from '../components/SEO';

const About: FunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Container mt={[8, 8, 10]}>
        <TeamSection
          title={data.allPrismicAbout.edges[0].node.data.title.text}
          subtitle={data.allPrismicAbout.edges[0].node.data.subtitle.text}
        />
        <AchievementSection title={data.allPrismicAbout.edges[0].node.data.achievement_header.text} />
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
  }
`;
export default About;
