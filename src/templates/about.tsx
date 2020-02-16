import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { AchievementSection, TeamSection } from '../components/sections';
import SEO from '../components/SEO';
import Common from '../components/common';

const About: FunctionComponent<{ data: any; pageContext: { lang } }> = ({
  data,
  pageContext: { lang },
}) => {
  const { title, subtitle, achievement_header } = data.prismicAbout.data;
  const slices = data.prismicAbout.data.body;
  const teamSection = slices.filter((slice) => slice.slice_type === 'profile');
  const achievementSection = slices.filter((slice) => slice.slice_type === 'achievements');

  return (
    <>
      <SEO title="about" />
      <Container pt={[16, 24]}>
        <TeamSection title={title.text} subtitle={subtitle.text} data={teamSection} />
        <AchievementSection title={achievement_header.text} data={achievementSection} />
      </Container>
      <Common lang={lang} />
    </>
  );
};

export const query = graphql`
  query About($lang: String!) {
    prismicAbout(lang: { eq: $lang }) {
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
        body {
          ... on PrismicAboutBodyProfile {
            primary {
              original_image {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 600, quality: 90, cropFocus: CENTER, fit: COVER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
              hovered_image1 {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 600, quality: 90, cropFocus: CENTER, fit: COVER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              name {
                text
              }
              position {
                text
              }
            }
            slice_type
          }
          ... on PrismicAboutBodyAchievements {
            primary {
              description {
                text
              }
              name {
                text
              }
              icon {
                url
                alt
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;
export default About;
