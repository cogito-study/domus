import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/core';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Background = styled(Flex)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 230px;
  z-index: -1;
`;

export const UseCaseSection = () => {
  const data = useStaticQuery(graphql`
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
              blog_post {
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicHomeBodyUseCase) return null;

  return (
    <Flex direction="column" align="center" justify="flex-end">
      <Flex wrap="wrap" w={['100%', '65%', '750px', '100%']} justify="center">
        {data.allPrismicHomeBodyUseCase.edges.map((useCase: any, index: number) => {
          const { icon, title, description, blog_post } = useCase.node.primary;

          return (
            <Flex
              bg="white"
              key={index}
              direction="column"
              w={['100%', '100%', '210px', '260px']}
              my={[4, 4, 6]}
              mx={3}
              align="start"
              justify="space-between"
              borderWidth={2}
              borderColor="blue.800"
            >
              <Flex
                mt={[6, 3, 3, 3]}
                mb={[4, 1, 2, 2]}
                mx={[2, 2, 0, 2]}
                direction={['row', 'row', 'column']}
                align={['center', 'center', 'start']}
                justify="center"
              >
                <Box minW="90px" w={['90px', '90px', '90px', '110px']}>
                  <Image alt={icon.alt} src={icon.url} width="100%" />
                </Box>
                <Flex h={'56px'} align="center">
                  <Heading
                    as="h3"
                    my={1}
                    mx={[3, 3, 3, 4]}
                    color="blue.800"
                    fontSize={['md', 'lg']}
                    lineHeight="normal"
                  >
                    {title.text}
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                mt={1}
                mx={[5, 5, 3, 5]}
                direction="column"
                h={['100%', '200px', '260px', '240px']}
                justify="space-between"
              >
                <Flex direction="column">
                  <Text my={2} color="grey.800" fontSize="sm">
                    {description.text}
                  </Text>
                </Flex>
                <Flex justify="center" mb={5} mt={[2, 2, 2, 4]}>
                  <GatsbyLink to={`/blog/${blog_post.slug}`}>
                    <Button variant="solid" variantColor="teal" color="blue.800" borderRadius={0}>
                      learn more
                    </Button>
                  </GatsbyLink>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Link href="https://app.cogito.study/register" _hover={{ textDecor: 'none' }}>
        <Button
          variant="solid"
          variantColor="teal"
          color="blue.800"
          borderRadius={0}
          w="200px"
          my={6}
        >
          register
        </Button>
      </Link>
      <Background bg="blue.800" />
    </Flex>
  );
};
