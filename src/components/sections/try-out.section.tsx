import { Flex, H2, Paragraph, Button, TextInput, EmailIcon } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TryOutQuery } from '../../generated/graphql-types';
import { Container } from '../container';

export const TryOutSection = () => {
  const data = useStaticQuery<TryOutQuery>(graphql`
    query TryOut {
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
    <Flex bg="primary.normal">
      {data.allPrismicHomeBodyTryOut.edges.map(({ node: { primary } }) => {
        if (primary) {
          const { image, image_description, subtitle, title } = primary;

          return (
            <Container>
              <Flex
                flexDirection={['column', 'column', 'column', 'row']}
                my={6}
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex flexDirection="column" maxWidth="300px">
                  {image && image.url && <img src={image.url} alt={image.alt || ''} />}
                  {image_description && (
                    <Paragraph my={1} color="grey.light.4" textAlign="center" mr={7}>
                      {image_description.text}
                    </Paragraph>
                  )}
                </Flex>
                <Flex flexDirection="column" maxWidth="420px" mx={3}>
                  {title && (
                    <H2 my={2} color="grey.light.4">
                      {title.text}
                    </H2>
                  )}
                  {subtitle && (
                    <Paragraph paragraphSize="large" my={2} color="grey.light.4">
                      {subtitle.text}
                    </Paragraph>
                  )}
                  <Flex flexDirection={['column', 'row']}>
                    <TextInput
                      placeholder="Enter your e-mail"
                      help='By clicking "try out!" your agree to our Privacy Policy.'
                      icon={<EmailIcon />}
                    />
                    <Button ml={[0, 4]} mt={[2, 0]} maxWidth="280px">
                      try out!
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          );
        }
      })}
    </Flex>
  );
};
