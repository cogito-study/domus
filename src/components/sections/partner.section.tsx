import { Anchor, Flex } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { genericTypeAnnotation } from '@babel/types';
import { wrap } from 'module';

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
    <Flex justifyContent="center" py={4} flexWrap="wrap" backgroundColor="grey.light.3">
      {data.allPrismicHomeBodyPartner.edges.map(({ node: { primary } }, index) => {
        if (primary && primary.link && primary.name)
          return (
            <Anchor key={index} href={primary.link.url} mx={4}>
              <img src={primary.logo.url} alt={primary.name.text}></img>
            </Anchor>
          );
      })}
    </Flex>
  );
};
