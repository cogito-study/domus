import { Anchor, Box, Flex, H1 } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
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
    <Container>
      <Flex width="100%" mt={10} mb={9} alignItems="center" justifyContent="center">
        <Flex
          alignItems="start"
          justifyContent="center"
          flexDirection="column"
          py={7}
          width={['100%', '100%', '100%', '600px']}
          border={3}
          borderColor="primary.1"
          backgroundColor="white"
        >
          <Flex alignItems="start" flexDirection="column" mx={4} ml={[5, 7]}>
            <H1 color="primary.8" mt={0} mb={[5, 6]}>
              Contact us
            </H1>
            <Flex flexDirection="column" alignItems="start" mb={6}>
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
            <Flex flexDirection="row" justifyContent="start">
              {data.allPrismicContactBodySocialMedia.nodes.map(({ primary }, index) => (
                <Box key={index} mt={[0, 3]} mr={[5, 6]}>
                  <Anchor href={primary.url.url}>
                    <img src={primary.icon.url} />
                  </Anchor>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
