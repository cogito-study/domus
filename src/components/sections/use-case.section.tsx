import { Flex, H3, Paragraph, Button } from '@cogito-study/alea';
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
              icon {
                url
                alt
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicHomeBodyUseCase) return null;

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {data.allPrismicHomeBodyUseCase.edges.map(({ node: { primary } }, index) => (
        <Flex
          key={index}
          flexDirection="column"
          maxWidth="276px"
          mx={2}
          my={3}
          px={2}
          pt={3}
          pb={4}
          alignItems="start"
          justifyContent="start"
          border={3}
          borderColor="primary.light"
        >
          {primary && primary.icon && <img alt={primary.icon.alt} src={primary.icon.url} />}
          <Flex mt={1} px={3} flexDirection="column" height="250px" justifyContent="space-between">
            <Flex flexDirection="column">
              {primary && primary.title && (
                <H3 my={1} color="primary.normal">
                  {primary.title.text}
                </H3>
              )}
              {primary && primary.description && (
                <Paragraph my={2} color="grey.dark.3">
                  {primary.description.text}
                </Paragraph>
              )}
            </Flex>
            <Button variant={'secondary'} maxWidth="150px" mt={4}>
              learn more
            </Button>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
