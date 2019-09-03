import React, { FunctionComponent } from 'react';
import { Box, Flex, H1, Anchor } from '@cogito-study/alea';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Container } from '../container';

export const ContactSection: FunctionComponent = () => {
  const data = useStaticQuery<any>(graphql`
    query ContactInfos {
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
    <Container flexDirection="column" alignItems="center">
      <Flex mt={10} mb={8} justifyContent="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          border={3}
          py={7}
          borderColor="primary.light"
          width={['100%', '100%', '100%', '600px']}
          backgroundColor="white"
        >
          <Flex alignItems="center" justifyContent="center" flexDirection="column" mx={4}>
            <H1 color="primary.dark" mt={0} mb={6}>
              Contact
            </H1>
            <Flex flexDirection="column" alignItems="center" mb={6}>
              <Box my={2}>
                <Anchor href="mailto:contact@cogito.study" fontWeight="semibold">
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
          </Flex>
          <Flex mt={4}>
            {data.allPrismicContactBodySocialMedia.nodes.map(({ primary }, index) => (
              <Box key={index} mx={2}>
                <Anchor href={primary.url.url}>
                  <img src={primary.icon.url} />
                </Anchor>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
