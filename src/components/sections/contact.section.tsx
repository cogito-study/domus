import { Box, Flex, Heading, Image, Link } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import i18n from '../../../config/i18n.js';
import { Container } from '../container';

export const ContactSection: FunctionComponent = ({ lang }) => {
  const data = useStaticQuery<any>(graphql`
    query ContactInfos {
      allPrismicContact {
        edges {
          node {
            lang
            data {
              address {
                text
              }
              e_mail {
                text
              }
              phone_number {
                text
              }
              body {
                ... on PrismicContactBodySocialMedia {
                  slice_type
                  primary {
                    url {
                      url
                    }
                    icon {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicContact) return null;
  const filteredData = data.allPrismicContact.edges.filter(
    (filtered) => filtered.node.lang == lang,
  );
  const slices = filteredData[0].node.data.body;
  const socialSection = slices.filter((slice) => slice.slice_type === 'social_media');

  return (
    <Container>
      <Flex w="100%" mt={32} mb={24} align="center" justify="center">
        <Flex
          align="start"
          justify="center"
          direction="column"
          py={12}
          w={['full', 'full', 'full', '600px']}
          borderWidth={4}
          borderColor="blue.100"
          bg="#FFF"
        >
          <Flex align="start" direction="column" mx={4} ml={[6, 6, 12]}>
            <Heading as="h1" color="blue.800" mt={0} mb={[6, 8]} fontSize={['xl', 'xl', '2xl']}>
              {i18n[lang].sections.contact}
            </Heading>
            <Flex direction="column" align="start" mb={6}>
              <Box my={2}>
                <Link
                  color="teal.600"
                  href={`mailto:${data.allPrismicContact.edges[0].node.data.e_mail.text}`}
                  fontWeight={600}
                  fontSize="sm"
                  _hover={{ textDecoration: 'none', color: 'teal.800' }}
                >
                  {data.allPrismicContact.edges[0].node.data.e_mail.text}
                </Link>
              </Box>

              <Box my={2}>
                <Link
                  color="teal.600"
                  href="https://www.google.com/maps/place/Cogito+Technologies+Ltd./@47.4995828,19.0565544,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dd4808c49f37:0xd2d0d6ae69129e56!8m2!3d47.4995792!4d19.0587484"
                  fontWeight={600}
                  fontSize="sm"
                  _hover={{ textDecoration: 'none', color: 'teal.800' }}
                >
                  {data.allPrismicContact.edges[0].node.data.address.text}
                </Link>
              </Box>
            </Flex>
            <Flex direction="row" justify="start">
              {socialSection.map(({ primary }, index: number) => (
                <Box key={index} mt={[0, 3]} mr={[5, 6]}>
                  <Link href={primary.url.url}>
                    <Image src={primary.icon.url} />
                  </Link>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
