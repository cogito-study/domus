import { Flex, H2, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { EmailInput } from '../email-input';

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
    <Flex bg="primary.dark">
      {data.allPrismicHomeBodyTryOut.edges.map((tryOut: any, index: number) => {
        const { image, image_description, subtitle, title } = tryOut.node.primary;

        return (
          <Flex
            width="100%"
            flexDirection={['column', 'column', 'column', 'row']}
            my={7}
            justifyContent="center"
            alignItems="center"
            key={index}
          >
            <Flex flexDirection="column" maxWidth="300px" mb={[7, 7, 7, 0]} mr={[0, 0, 0, 8]}>
              <img src={image.url} alt={image.alt || ''} />

              <Paragraph my={1} color="grey.light.4" textAlign="center" mt={3}>
                {image_description.text}
              </Paragraph>
            </Flex>
            <Flex flexDirection="column" maxWidth="420px" mx={3}>
              <H2 my={2} color="grey.light.4">
                {title.text}
              </H2>
              <Paragraph mb={3} color="grey.light.4">
                {subtitle.text}
              </Paragraph>
              {data.allPrismicHome.edges.map((tryOutPopup: any, index: number) => {
                const { popup_text, popup_title } = tryOutPopup.node.data;
                return (
                  <Flex mt={2} flexDirection={['column', 'row']} key={index}>
                    <EmailInput
                      popup={{
                        title: popup_title.text,
                        titleColor: 'white',
                        text: popup_text.text,
                        textColor: 'primary.light',
                        backgroundColor: 'primary.dark',
                      }}
                    />
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
