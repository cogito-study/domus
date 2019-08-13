import { Flex, H3, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { UseCaseQuery } from '../../generated/graphql-types';

export const UseCaseSection = () => {
  const data = useStaticQuery<UseCaseQuery>(graphql`
    query UseCase {
      allPrismicHomeBodyUseCase {
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

  if (!data.allPrismicHomeBodyUseCase) return null;

  return (
    <Flex>
      {data.allPrismicHomeBodyUseCase.edges.map(({ node: { primary } }, index) => (
        <Flex key={index} flexDirection="column" color="primary" border="2px solid red">
          {primary && primary.title && <H3 color="primary.normal">{primary.title.text}</H3>}
          {primary && primary.description && <Paragraph color="grey.dark.3">{primary.description.text}</Paragraph>}
        </Flex>
      ))}
    </Flex>
  );
};
