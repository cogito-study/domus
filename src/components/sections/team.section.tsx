import Image from 'gatsby-image';
import { Box, Grid, H1, H2, H3, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../container';
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
                    fluid(maxHeight: 300, cropFocus: CENTER, fit: COVER) {
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
    <Container>
      <H1 color="primary.dark">{title}</H1>
      <H2 color="grey.dark.3">{subtitle}</H2>
      <Grid gridGap={5} gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))">
        {data.allPrismicAboutBodyProfile.edges.map(({ node: { primary } }, index) => (
          <Box key={index}>
            <Box>
              <ProfileImage fluid={primary.image.localFile.childImageSharp.fluid} alt={primary.image.alt} />
            </Box>
            <H3 mb={1} mt={2} color="primary.dark">
              {primary.name.text}
            </H3>
            <Paragraph mb={6} mt={0} color="grey.normal">
              {primary.position.text}
            </Paragraph>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};
