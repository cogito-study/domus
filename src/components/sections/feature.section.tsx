import { Flex, H2, Paragraph, Button, Box } from '@chakra-ui/core';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
    <Flex flexDirection="column" alignItems={['center', 'center', 'space-between']} mx={[4, 4, 0, 7]}>
      {data.allPrismicHomeBodyFeature.edges.map((feature: any, index: number) => {
        const { image, title, description, blog_post } = feature.node.primary;

        return (
          <Flex
            key={index}
            flexDirection={
              index % 2 == 1 ? ['column', 'column', 'row-reverse', 'row-reverse'] : ['column', 'column', 'row', 'row']
            }
            alignItems={['center', 'center', 'space-between']}
            justifyContent={['center', 'center', 'space-between']}
            my={[6, 8, 7]}
            width={['100%', '70%', '100%', '100%']}
          >
            {/* Width should be 300px on smaller screens and 400px on desktop on the image */}
            <Box width={['300px', '300px', '300px', '400px']}>
              <img alt={image.alt} src={image.url} width="100%" />
            </Box>
            <Flex
              flexDirection="column"
              justifyContent="center"
              maxWidth={['100%', '100%', '300px', '470px']}
              ml={index % 2 == 1 ? [0] : [0, 0, 0, 9]}
              mt={[4, 6, 7, 0]}
            >
              <H2 my={3} color="primary.8">
                {title.text}
              </H2>
              <Paragraph color="neutral.8">{description.text}</Paragraph>
              <Link to={`/blog/${blog_post.slug}`}>
                <Button variant="secondary" maxWidth="150px" mt={4}>
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
