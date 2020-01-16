import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { AchievementSection, TeamSection } from '../components/sections';
import SEO from '../components/SEO';

const About: FunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <>
      <SEO title="About | Cogito" />
      <Container pt={[16, 24]}>
        <TeamSection
          title={data.allPrismicAbout.edges[0].node.data.title.text}
          subtitle={data.allPrismicAbout.edges[0].node.data.subtitle.text}
        />
        <AchievementSection
          title={data.allPrismicAbout.edges[0].node.data.achievement_header.text}
        />
      </Container>
    </>
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
