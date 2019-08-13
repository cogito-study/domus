import React from 'react';
import { Flex, H4 } from '@cogito-study/alea';
import { useStaticQuery, graphql } from 'gatsby';
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
  return (<Flex>{data.allPrismicHomeBodyPartner.edges.map(({node: { primary}}, index) => (
  ))}</Flex>);
};
