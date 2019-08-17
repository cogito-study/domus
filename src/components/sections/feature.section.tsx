import { Flex, H3, Paragraph, Button } from '@cogito-study/alea';
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
    <Flex flexDirection="column">
      {data.allPrismicHomeBodyFeature.edges.map(({ node: { primary } }, index) => (
        <Flex key={index} flexDirection="row" my={9}>
          {primary && primary.image && <img alt={primary.image.alt} src={primary.image.url} />}
          <Flex flexDirection="column" maxWidth="470px" ml={9} justifyContent="center">
          {primary && primary.title && <H3 my={0} color="grey.dark.3">{primary.title.text}</H3>}
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
