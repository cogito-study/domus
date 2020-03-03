import { Location } from '@reach/router';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React, { FunctionComponent } from 'react';
import i18n from '../../config/i18n.js';
import Common from '../components/common';
import { Container } from '../components/container';
import { AchievementSection, TeamSection } from '../components/sections';

const About: FunctionComponent<{ data: any; pageContext: { lang } }> = ({
  data,
  pageContext: { lang },
}) => {
  const { title, subtitle, achievement_header } = data.prismicAbout.data;
  const slices = data.prismicAbout.data.body;
  const teamSection = slices.filter((slice) => slice.slice_type === 'profile');
  const achievementSection = slices.filter((slice) => slice.slice_type === 'achievements');

  const seoTitle = i18n[lang].pages.about;

  return (
    <Location>
      {({ location }) => (
        <>
          <GatsbySeo
            title={seoTitle}
            openGraph={{
              url: location.href,
              title: `${seoTitle} | cogito`,
            }}
          />
          <Container pt={[16, 24]}>
            <TeamSection title={title.text} subtitle={subtitle.text} data={teamSection} />
            <AchievementSection
              title={achievement_header.text}
              data={achievementSection}
              lang={lang}
            />
          </Container>
          <Common lang={lang} />
        </>
      )}
    </Location>
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
