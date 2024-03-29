import { Flex, Image, Link } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const PartnerSection = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query Partner {
      allPrismicHome {
        edges {
          node {
            lang
            data {
              body {
                ... on PrismicHomeBodyPartner {
                  slice_type
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
        }
      }
    }
  `);

  if (!data.allPrismicHome) return null;
  const filteredData = data.allPrismicHome.edges.filter((filtered) => filtered.node.lang == lang);
  const slices = filteredData[0].node.data.body;
  const partnerSection = slices.filter((slice) => slice.slice_type === 'partner');

  return (
    <Flex justify="center" py={5} bg="teal.500">
      <Flex w={['300px', 'full']} justify="center" wrap="wrap">
        {partnerSection.map((partner: any, index: number) => {
          const { link, logo, name } = partner.primary;

          return (
            <Link
              key={index}
              href={link.url}
              rel="noreferrer noopener"
              mx={[2, 2, 6]}
              w={['110px', '100px', '110px']}
            >
              <Image w="100%" src={logo.url} alt={name.text}></Image>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};
