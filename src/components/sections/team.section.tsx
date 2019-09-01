import React, { FunctionComponent } from 'react';
import { Box, H1, H2, H3, Grid, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '../container';

interface TeamSectionProps {
  title: string;
  subtitle: string;
}

export const TeamSection: FunctionComponent<TeamSectionProps> = ({ title, subtitle }) => {
  const data = useStaticQuery<any>(graphql`
    query Team {
      allPrismicAboutBodyProfile {
        edges {
          node {
            primary {
              image {
                url
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
            <Box height={['140px', '140px', '140px', '300px']}>
              <img src={primary.image.url} width="100%" height="100%" style={{ objectFit: 'cover' }} />
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
