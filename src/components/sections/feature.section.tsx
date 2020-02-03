import { Box, Button, Flex, Heading, Image } from '@chakra-ui/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export const FeatureSection = () => {
  const data = useStaticQuery(graphql`
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
              blog_post {
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicHomeBodyFeature) return null;

  return (
    <Flex
      flexDirection="column"
      alignItems={['center', 'center', 'space-between']}
      mx={[4, 4, 0, 8]}
    >
      {data.allPrismicHomeBodyFeature.edges.map((feature: any, index: number) => {
        const { image, title, description, blog_post } = feature.node.primary;

        return (
          <Flex
            key={index}
            flexDirection={
              index % 2 == 1
                ? ['column', 'column', 'row-reverse', 'row-reverse']
                : ['column', 'column', 'row', 'row']
            }
            alignItems={['center', 'center', 'space-between']}
            justifyContent={['center', 'center', 'space-between']}
            my={[6, 8, 12]}
            w={['full', '70%', 'full']}
          >
            <Box w={['300px', '300px', '300px', '400px']}>
              <Image alt={image.alt} src={image.url} w="100%" />
            </Box>
            <Flex
              flexDirection="column"
              justifyContent="center"
              maxW={['full', 'full', '300px', '470px']}
              ml={index % 2 == 1 ? 0 : [0, 0, 0, 9]}
              mt={[4, 6, 7, 0]}
            >
              <Heading my={3} fontSize={['lg', 'lg', 'xl']} lineHeight="normal" color="blue.800">
                {title.text}
              </Heading>
              <Box color="grey.800">{description.text}</Box>
              <Link to={`/blog/${blog_post.slug}`}>
                <Button maxW="150px" mt={4} borderWidth="2px" borderColor="teal.500">
                  learn more
                </Button>
              </Link>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
