import { Anchor, Flex } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { PartnerQuery } from '../../generated/graphql-types';

export const PartnerSection = () => {
  const data = useStaticQuery<PartnerQuery>(graphql`
    query Partner {
      allPrismicHomeBodyPartner {
        edges {
          node {
            primary {
              name {
                text
              }
              link {
                url
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicHomeBodyPartner) return null;
  return (
    <Flex>
      {data.allPrismicHomeBodyPartner.edges.map(({ node: { primary } }, index) => {
        if (primary && primary.link && primary.name)
          return (
            <Anchor key={index} href={primary.link.url}>
              {primary.name.text}
            </Anchor>
          );
      })}
    </Flex>
  );
};
