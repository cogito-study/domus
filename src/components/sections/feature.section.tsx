import { Flex, H3, Paragraph } from '@cogito-study/alea';
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
              description {
                text
              }
              title {
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
        <Flex key={index} flexDirection="row">
          {primary && primary.title && <H3 color="grey.dark.3">{primary.title.text}</H3>}
          {primary && primary.description && <Paragraph color="grey.dark.3">{primary.description.text}</Paragraph>}
        </Flex>
      ))}
    </Flex>
  );
};
