import { Grid, H1, H2, Flex } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import { TeamMember } from '../team-member';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

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
