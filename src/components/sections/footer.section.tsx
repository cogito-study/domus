import { Box, Flex, Heading, Link, LinkProps, PseudoBox } from '@chakra-ui/core';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';
import i18n from '../../../config/i18n.js';
import { Container } from '../container';

export const FooterSection = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query Features {
      allPrismicHome {
        edges {
          node {
            lang
            data {
              body {
                ... on PrismicHomeBodyUseCase {
                  slice_type
                  primary {
                    title {
                      text
                    }
                    feature_description {
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
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
                      alt
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

  if (!data.allPrismicHome) return null;
  const filteredData = data.allPrismicHome.edges.filter((filtered) => filtered.node.lang == lang);
  const filteredContact = data.allPrismicContact.edges.filter(
    (filtered) => filtered.node.lang == lang,
  );

  const slices = filteredData[0].node.data.body;
  const useCaseSection = slices.filter((slice) => slice.slice_type === 'use_case');
  const socialSection = filteredContact[0].node.data.body.filter(
    (slice) => slice.slice_type === 'social_media',
  );

  const linkProps: LinkProps = {
    fontWeight: 'semibold',
    fontFamily: 'heading',
    fontSize: 'sm',
    color: 'grey.600',
    textDecoration: 'none',
    _hover: { color: 'grey.800' },
  };

  return (
    <Flex direction="column" bg="white">
      <Flex justify="center" mt={6} mb={9} mx={[5, 0]} direction={['column', 'row']}>
        <Box width="210px" mx={4}>
          <Heading as="h2" mt={6} mb={3} color="grey.800" fontSize={[24, 32]}>
            Cogito
          </Heading>
          <Flex direction="column">
            <Link as="div" {...linkProps} my={2}>
              <GatsbyLink to={`${i18n[lang].path}/about`}>{i18n[lang].pages.about}</GatsbyLink>
            </Link>
            <Link as="div" {...linkProps} my={2}>
              <GatsbyLink to={`${i18n[lang].path}/contact`}>{i18n[lang].pages.contact}</GatsbyLink>
            </Link>
            {/*<Box my={2}>
              <GatsbyLink to="/blog">
                blog
              </GatsbyLink>
            </Box>
            <Box my={2}>
              <GatsbyLink to="/pricing">
                pricing
              </GatsbyLink>
            </Box>*/}
          </Flex>
        </Box>
        <Box width="210px" mx={4}>
          <Heading as="h2" mt={6} mb={3} color="grey.800" fontSize={[24, 32]}>
            {`${i18n[lang].sections.usecase.charAt(0).toUpperCase()}${i18n[
              lang
            ].sections.usecase.slice(1)}`}
          </Heading>
          <Flex direction="column">
            {useCaseSection.map((useCase: any, index: number) => {
              const { feature_description, title } = useCase.primary;
              return (
                <Link as="div" {...linkProps} my={2} key={index}>
                  <GatsbyLink to={`${i18n[lang].path}/feature/${feature_description.slug}`}>
                    {title.text.toLowerCase()}
                  </GatsbyLink>
                </Link>
              );
            })}
          </Flex>
        </Box>
        <Box width="210px" mx={4}>
          <Heading as="h2" mt={6} mb={3} color="grey.800" fontSize={[24, 32]}>
            {`${i18n[lang].pages.contact.charAt(0).toUpperCase()}${i18n[lang].pages.contact.slice(
              1,
            )}`}
          </Heading>
          <Flex direction="column">
            <Box my={2}>
              <Link
                href={`mailto:${data.allPrismicContact.edges[0].node.data.e_mail.text}`}
                {...linkProps}
              >
                {data.allPrismicContact.edges[0].node.data.e_mail.text}
              </Link>
            </Box>

            <Box my={2}>
              <Link
                href="https://www.google.com/maps/place/Cogito+Technologies+Ltd./@47.4995828,19.0565544,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dd4808c49f37:0xd2d0d6ae69129e56!8m2!3d47.4995792!4d19.0587484"
                {...linkProps}
              >
                {data.allPrismicContact.edges[0].node.data.address.text}
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box bg="neutral.0">
        <Container>
          <Flex
            direction={['column', 'column', 'column', 'row']}
            justify="space-between"
            align="center"
            height={['auto', 'auto', 'auto', '70px']}
          >
            <Flex align="center" direction={['column', 'column', 'column', 'row']}>
              <Flex mr={[0, 0, 0, 8]} mb={[4, 4, 4, 0]} mt={[3, 3, 3, 0]}>
                {socialSection.map(({ primary }, index) => (
                  <Box key={index} mx={2}>
                    <Link href={primary.url.url}>
                      <img src={primary.icon.url} alt={primary.icon.alt} />
                    </Link>
                  </Box>
                ))}
              </Flex>
              {/*<Flex direction="row">
                <Box mx={2}>
                  <Anchor href="#" color="grey.800">
                    English
                  </Anchor>
                </Box>
                <Box mx={2}>
                  <Anchor href="#" color="neutral.5">
                    Hungarian
                  </Anchor>
                </Box>
                <Box mx={2}>
                  <Anchor href="#" color="neutral.5">
                    Romanian
                  </Anchor>
                </Box>
                </Flex> */}
            </Flex>
            <Flex direction="row" mt={[2, 2, 2, 0]} mb={[3, 3, 3, 0]}>
              <PseudoBox
                mr={4}
                fontFamily="heading"
                fontSize="sm"
                color="grey.600"
                textDecoration="none"
                _hover={{ color: 'grey.800' }}
              >
                <GatsbyLink to={`${i18n[lang].path}/terms-and-conditions`}>
                  {i18n[lang].sections.terms}
                </GatsbyLink>
              </PseudoBox>
              <PseudoBox
                mr={4}
                fontFamily="heading"
                fontSize="sm"
                color="grey.600"
                textDecoration="none"
                _hover={{ color: 'grey.800' }}
              >
                <GatsbyLink to={`${i18n[lang].path}/privacy-policy`}>
                  {i18n[lang].sections.privacy}
                </GatsbyLink>
              </PseudoBox>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};
