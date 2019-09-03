import { Box, Grid, H1, H2, H3, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container } from '../container';

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
    query Team {
      allPrismicAboutBodyProfile {
        edges {
          node {
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(fit: COVER, cropFocus: CENTER, maxHeight: 300) {
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
      <Grid gridGap={5} gridTemplateColumns={['1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr']}>
        {data.allPrismicAboutBodyProfile.edges.map(({ node: { primary } }, index) => (
          <Box key={index}>
            <Box height={[140, 140, 140, 300]}>
              <ProfileImage fluid={primary.image.localFile.childImageSharp.fluid} />
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
