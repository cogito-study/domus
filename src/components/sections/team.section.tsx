import { Flex, Grid, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { TeamMember } from '../team-member';

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
          }
        }
      }
    }
  `);

  if (!data.allPrismicAboutBodyProfile) return null;

  return (
    <Flex
      direction="column"
      justify="start"
      px={[0, 4, 4, 4, 0]}
      maxW={['100%', '640px', '640px', '1024px']}
    >
      <Heading as="h1" color="blue.800" mb={0} fontSize={['xl', 'xl', '2xl']} lineHeight="normal">
        {title}
      </Heading>
      <Heading color="grey.800" mt={4} mb={12} fontSize={['lg', 'lg', 'xl']}>
        {subtitle}
      </Heading>
      <StyledGrid
        gridGap={[3, 3, 4, 5, 6]}
        gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
      >
        {data.allPrismicAboutBodyProfile.edges.map((profile: any, index: number) => {
          const { original_image, hovered_image1, name, position } = profile.node.primary;

          return (
            <TeamMember
              original_image={original_image.localFile}
              hovered_image1={hovered_image1.localFile}
              name={name.text}
              position={position.text}
              key={index}
              alt={original_image.alt}
            />
          );
        })}
      </StyledGrid>
    </Flex>
  );
};
