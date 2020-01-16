import { Button, Link } from '@chakra-ui/core';
import { Flex, H2, Paragraph } from '@cogito-study/alea';
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
    <Flex bg="primary.8">
      {data.allPrismicHomeBodyTryOut.edges.map((tryOut: any, index: number) => {
        const { image, image_description, subtitle, title } = tryOut.node.primary;

        return (
          <Flex
            width="100%"
            flexDirection={['column', 'column', 'row', 'row']}
            my={7}
            justifyContent="center"
            alignItems="center"
            key={index}
          >
            <Flex flexDirection="column" maxWidth="300px" mb={[7, 7, 7, 0]} mr={[0, 0, 0, 8]}>
              <img src={image.url} alt={image.alt || ''} />

              <Paragraph my={1} color="neutral.1" textAlign="center" mt={3}>
                {image_description.text}
              </Paragraph>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems={['center', 'center', 'start']}
              textAlign={['center', 'center', 'start']}
              maxWidth={['300px', '420px']}
              mx={3}
            >
              <H2 my={2} color="neutral.1">
                {title.text}
              </H2>
              <Paragraph mb={3} color="neutral.1">
                {subtitle.text}
              </Paragraph>
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
