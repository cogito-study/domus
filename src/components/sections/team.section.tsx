import { Box, Grid, H1, H2, H3, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
interface TeamSectionProps {
  title: string;
  subtitle: string;
}

export const TeamSection: FunctionComponent<TeamSectionProps> = ({ title, subtitle }) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicAboutBodyProfile {
        edges {
          node {
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 600, quality: 90, cropFocus: CENTER, fit: COVER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
              name {
                text
              }
              position {
                text
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicAboutBodyProfile) return null;

  return (
    <>
      <H1 color="primary.8" mb={0}>
        {title}
      </H1>
      <H2 color="neutral.8" mt={4} mb={7}>
        {subtitle}
      </H2>
      <Grid gridGap={5} gridTemplateColumns={['1fr 1fr', '1fr 1fr 1fr']}>
        {data.allPrismicAboutBodyProfile.edges.map((profile: any, index: number) => {
          const { image, name, position } = profile.node.primary;

          return (
            <Box key={index}>
              <Box height={[140, 190, 190, 300]}>
                <ProfileImage fluid={image.localFile.childImageSharp.fluid} alt={image.alt} />
              </Box>
              <H3 mb={1} mt={2} color="primary.8">
                {name.text}
              </H3>
              <Paragraph mb={6} mt={0} color="neutral.5">
                {position.text}
              </Paragraph>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};
