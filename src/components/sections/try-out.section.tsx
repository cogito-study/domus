import { Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const TryOutSection = () => {
  const data = useStaticQuery(graphql`
    query TryOut {
      allPrismicHome {
        edges {
          node {
            lang
            data {
              popup_text {
                text
              }
              popup_title {
                text
              }
            }
          }
        }
      }
      allPrismicHomeBodyTryOut {
        edges {
          node {
            primary {
              image {
                url
                alt
              }
              image_description {
                text
              }
              subtitle {
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

  if (!data.allPrismicHomeBodyTryOut) return null;

  return (
    <Flex bg="blue.800">
      {data.allPrismicHomeBodyTryOut.edges.map((tryOut: any, index: number) => {
        const { image, image_description, subtitle, title } = tryOut.node.primary;

        return (
          <Flex
            w="100%"
            direction={['column', 'column', 'row', 'row']}
            my={7}
            justify="center"
            align="center"
            key={index}
          >
            <Flex direction="column" maxW="300px" mb={[8, 8, 8, 0]} mr={[0, 0, 0, 8]}>
              <Image src={image.url} alt={image.alt || ''} />

              <Text my={1} color="grey.100" textAlign="center" mt={3}>
                {image_description.text}
              </Text>
            </Flex>
            <Flex
              direction="column"
              align={['center', 'center', 'start']}
              textAlign={['center', 'center', 'start']}
              maxW={['300px', '420px']}
              mx={3}
            >
              <Heading my={2} color="grey.100">
                {title.text}
              </Heading>
              <Text mb={3} color="grey.100">
                {subtitle.text}
              </Text>
              <Link href="https://app.cogito.study/register" _hover={{ textDecor: 'none' }}>
                <Button
                  variant="solid"
                  variantColor="teal"
                  color="blue.800"
                  w="200px"
                  borderRadius={0}
                >
                  register
                </Button>
              </Link>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
