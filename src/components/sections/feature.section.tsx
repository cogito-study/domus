import { Flex, H3, Paragraph, Button, Box } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeatureQuery } from '../../generated/graphql-types';

export const FeatureSection = () => {
  const data = useStaticQuery<FeatureQuery>(graphql`
    query Feature {
      allPrismicHomeBodyFeature {
        edges {
          node {
            primary {
              image {
                url
                alt
              }
              title {
                text
              }
              description {
                text
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicHomeBodyFeature) return null;

  return (
    <Flex flexDirection="column" alignItems={['center', 'center', 'space-between']}           mx={[4, 4, 0, 7]}
    >
      {data.allPrismicHomeBodyFeature.edges.map(({ node: { primary } }, index) => (
        <Flex
          key={index}
          flexDirection={['column', 'column', 'row', 'row']}
          alignItems={['center', 'center', 'space-between']}
          justifyContent={['center', 'center', 'space-between']}
          my={[4, 8, 7]}
          width={['100%', '70%', '100%', '100%']}
        >
          {/* Width should be 300px on smaller screens and 400px on desktop */}
          <Box  width={['300px', '300px', '300px', '400px']}>
          {primary && primary.image && <img alt={primary.image.alt} src={primary.image.url} width="100%" />}
          </Box>
          <Flex
            flexDirection="column"
            justifyContent="center"
            maxWidth={['100%', '100%', '300px', '470px']}
            ml={[0, 0, 0, 9]}
            mt={[4, 6, 7, 0]}
          >
            {primary && primary.title && (
              <H3 my={0} color="grey.dark.3">
                {primary.title.text}
              </H3>
            )}
            {primary && primary.description && <Paragraph color="grey.dark.3">{primary.description.text}</Paragraph>}
            <Button variant={'secondary'} maxWidth="150px" mt={4}>
              learn more
            </Button>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
