import { Flex, Box, H2, Anchor } from '@cogito-study/alea';
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Container } from '../container';

export const FooterSection = () => {
  const data = useStaticQuery<any>(graphql`
    query Features {
      allPrismicHomeBodyUseCase {
        edges {
          node {
            primary {
              title {
                text
              }
            }
          }
        }
      }
      allPrismicContact {
        nodes {
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
          }
        }
      }
      allPrismicContactBodySocialMedia {
        nodes {
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
  `);
  return (
    <>
      <Flex justifyContent="center" my={7} mx={[5, 0]} flexDirection={['column', 'row']}>
        <Box width="210px" mx={4}>
          <H2 color="grey.normal">Cogito</H2>
          <Flex flexDirection="column">
            <Box my={2}>
              <Anchor href="/" fontWeight="semibold">
                product
              </Anchor>
            </Box>
            <Box my={2}>
              <Anchor href="/blog" fontWeight="semibold">
                blog
              </Anchor>
            </Box>
            <Box my={2}>
              <Anchor href="/pricing" fontWeight="semibold">
                pricing
              </Anchor>
            </Box>
            <Box my={2}>
              <Anchor href="/about" fontWeight="semibold">
                about us
              </Anchor>
            </Box>
            <Box my={2}>
              <Anchor href="/contact" fontWeight="semibold">
                contact
              </Anchor>
            </Box>
          </Flex>
        </Box>
        <Box width="210px" mx={4}>
          <H2 color="grey.normal">Features</H2>
          <Flex flexDirection="column">
            {data.allPrismicHomeBodyUseCase.edges.map(({ node: { primary } }, index) => (
              <Box my={2} key={index}>
                <Anchor href="/" fontWeight="semibold">
                  {primary.title.text}
                </Anchor>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box width="210px" mx={4}>
          <H2 color="grey.normal">Contact</H2>
          <Flex flexDirection="column">
            <Box my={2}>
              <Anchor href={`mailto:${data.allPrismicContact.nodes[0].data.e_mail.text}`} fontWeight="semibold">
                {data.allPrismicContact.nodes[0].data.e_mail.text}
              </Anchor>
            </Box>
            <Box my={2}>
              <Anchor href={`tel:${data.allPrismicContact.nodes[0].data.phone_number.text}`} fontWeight="semibold">
                {data.allPrismicContact.nodes[0].data.phone_number.text}
              </Anchor>
            </Box>
            <Box my={2}>
              <Anchor
                href="https://www.google.com/maps/place/Cogito+Technologies+Ltd./@47.4995828,19.0565544,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dd4808c49f37:0xd2d0d6ae69129e56!8m2!3d47.4995792!4d19.0587484"
                fontWeight="semibold"
              >
                {data.allPrismicContact.nodes[0].data.address.text}
              </Anchor>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box bg="grey.light.4">
        <Container>
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            justifyContent="space-between"
            alignItems="center"
            height={['auto', 'auto', 'auto', '70px']}
          >
            <Flex alignItems="center" flexDirection={['column', 'column', 'column', 'row']}>
              <Flex mr={[0, 0, 0, 8]} mb={[4, 4, 4, 0]} mt={[3, 3, 3, 0]}>
                {data.allPrismicContactBodySocialMedia.nodes.map(({ primary }, index) => (
                  <Box key={index} mx={2}>
                    <Anchor href={primary.url.url}>
                      <img src={primary.icon.url} />
                    </Anchor>
                  </Box>
                ))}
              </Flex>
              {/*<Flex flexDirection="row">
                <Box mx={2}>
                  <Anchor href="#" color="grey.dark.3">
                    English
                  </Anchor>
                </Box>
                <Box mx={2}>
                  <Anchor href="#" color="grey.normal">
                    Hungarian
                  </Anchor>
                </Box>
                <Box mx={2}>
                  <Anchor href="#" color="grey.normal">
                    Romanian
                  </Anchor>
                </Box>
                </Flex> */}
            </Flex>
            <Flex flexDirection="row" mt={[2, 2, 2, 0]} mb={[3, 3, 3, 0]}>
              <Box mr={4}>
                <Anchor href="#" color="grey.normal">
                  Terms and conditions
                </Anchor>
              </Box>
              <Box ml={4}>
                <Anchor href="#" color="grey.normal">
                  Privacy policy
                </Anchor>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
