import { Flex, Box, H2, Anchor } from '@cogito-study/alea';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '../container';
import { StyledGatsbyLink } from '../styled/styled-gatsby-link';
import TermsAndConditions from '../../../static/documents/ASZF.pdf';
import PrivacyPolicy from '../../../static/documents/Adatvedelem.pdf';

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
              blog_post {
                slug
              }
            }
          }
        }
      }
      allPrismicContact {
        edges {
          node {
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
      }
      allPrismicContactBodySocialMedia {
        edges {
          node {
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
  `);
  return (
    <Flex flexDirection="column" backgroundColor="white">
      <Flex justifyContent="center" mt={6} mb={9} mx={[5, 0]} flexDirection={['column', 'row']}>
        <Box width="210px" mx={4}>
          <H2 mt={6} mb={3} color="grey.normal">
            Cogito
          </H2>
          <Flex flexDirection="column">
            <Box my={2}>
              <StyledGatsbyLink to="/" fontWeight="semibold">
                product
              </StyledGatsbyLink>
            </Box>
            {/*<Box my={2}>
              <StyledGatsbyLink to="/blog" fontWeight="semibold">
                blog
              </StyledGatsbyLink>
            </Box>
            <Box my={2}>
              <StyledGatsbyLink to="/pricing" fontWeight="semibold">
                pricing
              </StyledGatsbyLink>
            </Box>*/}
            <Box my={2}>
              <StyledGatsbyLink to="/about" fontWeight="semibold">
                about us
              </StyledGatsbyLink>
            </Box>
            <Box my={2}>
              <StyledGatsbyLink to="/contact" fontWeight="semibold">
                contact
              </StyledGatsbyLink>
            </Box>
          </Flex>
        </Box>
        <Box width="210px" mx={4}>
          <H2 mt={6} mb={3} color="grey.normal">
            Features
          </H2>
          <Flex flexDirection="column">
            {data.allPrismicHomeBodyUseCase.edges.map(({ node: { primary } }, index) => (
              <Box my={2} key={index}>
                <StyledGatsbyLink to={`/blog/${primary.blog_post.slug}`} fontWeight="semibold">
                  {primary.title.text.toLowerCase()}
                </StyledGatsbyLink>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box width="210px" mx={4}>
          <H2 mt={6} mb={3} color="grey.normal">
            Contact
          </H2>
          <Flex flexDirection="column">
            <Box my={2}>
              <Anchor href={`mailto:${data.allPrismicContact.edges[0].node.data.e_mail.text}`} fontWeight="semibold">
                {data.allPrismicContact.edges[0].node.data.e_mail.text}
              </Anchor>
            </Box>
            <Box my={2}>
              <Anchor href={`tel:${data.allPrismicContact.edges[0].node.data.phone_number.text}`} fontWeight="semibold">
                {data.allPrismicContact.edges[0].node.data.phone_number.text}
              </Anchor>
            </Box>
            <Box my={2}>
              <Anchor
                href="https://www.google.com/maps/place/Cogito+Technologies+Ltd./@47.4995828,19.0565544,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dd4808c49f37:0xd2d0d6ae69129e56!8m2!3d47.4995792!4d19.0587484"
                fontWeight="semibold"
              >
                {data.allPrismicContact.edges[0].node.data.address.text}
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
                {data.allPrismicContactBodySocialMedia.edges.map(({ node }, index) => (
                  <Box key={index} mx={2}>
                    <Anchor href={node.primary.url.url}>
                      <img src={node.primary.icon.url} />
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
                <Anchor href={TermsAndConditions} color="grey.normal">
                  Terms and conditions
                </Anchor>
              </Box>
              <Box ml={4}>
                <Anchor href={PrivacyPolicy} color="grey.normal">
                  Privacy policy
                </Anchor>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};
