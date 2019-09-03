import React, { FunctionComponent } from 'react';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import {
  TeamSection,
  AchievementSection,
  CustomerSection,
  PartnerSection,
  TryOutSection,
} from '../components/sections';

const About: FunctionComponent<AboutProps> = ({ data }) => {
  const { node } = data.allPrismicAbout.edges[0];
  const { title, subtitle, achievement_header } = node.data;

  return (
    <>
      <SEO />
      <TeamSection title={title.text} subtitle={subtitle.text} />
      <AchievementSection title={achievement_header.text} />
      <CustomerSection title="" />
      <PartnerSection />
      <TryOutSection />
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
