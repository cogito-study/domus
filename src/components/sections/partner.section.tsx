import { Anchor, Flex, Box } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const PartnerSection = () => {
  const data = useStaticQuery<any>(graphql`
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
    <Flex justifyContent="center" py={4} backgroundColor="#fff">
      <Flex width={['300px', '100%']} justifyContent="center" flexWrap="wrap">
        {data.allPrismicHomeBodyPartner.edges.map(({ node: { primary } }, index) => {
          if (primary && primary.link && primary.name)
            return (
              <Anchor key={index} href={primary.link.url} mx={4}>
                <Box width={['110px', '100px', '150px']}>
                  <img width="100%" src={primary.logo.url} alt={primary.name.text}></img>
                </Box>
              </Anchor>
            );
        })}
      </Flex>
    </Flex>
  );
};
