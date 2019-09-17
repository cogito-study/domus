import { Box, Grid, H1, H2, H3, Paragraph, Flex } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const ProfileImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
`;

const ImageContainer = styled(Box)`
  display: block;
  max-width: 300px;
  max-height: 300px;

  overflow: hidden;
`;

const StyledGrid = styled(Grid)`
  justify-items: start;
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
    <Flex
      flexDirection="column"
      justifyContent="start"
      px={[0, 4, 4, 4, 0]}
      maxWidth={['100%', '640px', '640px', '1024px']}
    >
      <H1 color="primary.8" mb={0}>
        {title}
      </H1>
      <H2 color="neutral.8" mt={4} mb={7}>
        {subtitle}
      </H2>
      <StyledGrid gridGap={[3, 3, 4, 5, 6]} gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}>
        {data.allPrismicAboutBodyProfile.edges.map((profile: any, index: number) => {
          const { image, name, position } = profile.node.primary;

          return (
            <Box width={[140, 200, 200, 260, 300]} key={index}>
              <ImageContainer height={[140, 200, 200, 260, 300]} width={[140, 200, 200, 260, 300]}>
                <ProfileImage fluid={image.localFile.childImageSharp.fluid} alt={image.alt} />
              </ImageContainer>
              <H3 fontSize={[15, 18, 18, 22]} mb={1} mt={2} color="primary.8">
                {name.text}
              </H3>
              <Paragraph fontSize={[13, 16]} lineHeight={1.2} mb={6} mt={0} color="neutral.6">
                {position.text}
              </Paragraph>
            </Box>
          );
        })}
      </StyledGrid>
    </Flex>
  );
};
