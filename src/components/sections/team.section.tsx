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
                    fluid(maxHeight: 190, maxWidth: 290) {
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
      <H1 color="primary.dark">{title}</H1>
      <H2 color="grey.dark.3">{subtitle}</H2>
      <Grid gridGap={5} gridTemplateColumns={['1fr 1fr', '1fr 1fr 1fr']}>
        {data.allPrismicAboutBodyProfile.edges.map((profile: any, index: number) => {
          const { image, name, position } = profile.node.primary;

          return (
            <Box key={index}>
              <Box height={[140, 190, 190, 300]}>
                <ProfileImage fluid={image.localFile.childImageSharp.fluid} alt={image.alt} />
              </Box>
              <H3 mb={1} mt={2} color="primary.dark">
                {name.text}
              </H3>
              <Paragraph mb={6} mt={0} color="grey.normal">
                {position.text}
              </Paragraph>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};
