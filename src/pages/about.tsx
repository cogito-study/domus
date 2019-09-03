import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Layout } from '../components/layout';
import {
  AchievementSection,
  CustomerSection,
  PartnerSection,
  TeamSection,
  TryOutSection,
} from '../components/sections';
import SEO from '../components/SEO';

const About: FunctionComponent<{ data: any }> = ({ data }) => {
  const { node } = data.allPrismicAbout.edges[0];
  const { title, subtitle, achievement_header } = node.data;

  return (
    <Layout>
      <SEO />
      <TeamSection title={title.text} subtitle={subtitle.text} />
      <AchievementSection title={achievement_header.text} />
      <CustomerSection title="" />
      <PartnerSection />
      <TryOutSection />
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
