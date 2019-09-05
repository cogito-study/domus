import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { AchievementSection, CustomerSection, TeamSection } from '../components/sections';
import SEO from '../components/SEO';

const About: FunctionComponent<{ data: any }> = ({ data }) => {
  const { node } = data.allPrismicAbout.edges[0];
  const { title, subtitle, achievement_header } = node.data;

  return (
    <Layout>
      <SEO />
      <Container mt={10}>
        <TeamSection title={title.text} subtitle={subtitle.text} />
        <AchievementSection title={achievement_header.text} />
        <CustomerSection title="" />
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
