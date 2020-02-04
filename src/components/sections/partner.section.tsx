import { Box, Flex, Image, Link } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const PartnerSection = () => {
  const data = useStaticQuery(graphql`
    query Partner {
      allPrismicHomeBodyPartner {
        edges {
          node {
            primary {
              logo {
                url
                alt
              }
              link {
                url
              }
              name {
                text
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicHomeBodyPartner) return null;
  return (
    <Flex justify="center" py={5} bg="teal.500">
      <Flex w={['300px', 'full']} justify="center" wrap="wrap">
        {data.allPrismicHomeBodyPartner.edges.map((partner: any, index: number) => {
          const { link, logo, name } = partner.node.primary;

          return (
            <Link key={index} href={link.url} mx={[2, 2, 6]}>
              <Box w={['110px', '100px', '110px']}>
                <Image w="100%" src={logo.url} alt={name.text}></Image>
              </Box>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};
