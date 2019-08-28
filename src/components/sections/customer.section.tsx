import React, { FunctionComponent } from 'react';
import { Flex, H2, H4 } from '@cogito-study/alea';
import { useStaticQuery, graphql } from 'gatsby';
import { CustomerQuery } from '../../generated/graphql-types';

interface CustomerSectionProps {
  title: string;
}

export const CustomerSection: FunctionComponent<CustomerSectionProps> = ({ title }) => {
  const data = useStaticQuery<CustomerQuery>(graphql`
    query Customer {
      allPrismicHomeBodyCustomer {
        edges {
          node {
            primary {
              name {
                text
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicHomeBodyCustomer) return null;

  return (
    <Flex>
      <H2 color="grey.dark.1">{title}</H2>
      {data.allPrismicHomeBodyCustomer.edges.map(
        ({ node: { primary } }, index) =>
          primary &&
          primary.name && (
            <H4 key={index} color="grey.dark.1">
              {primary.name.text}
            </H4>
          ),
      )}
    </Flex>
  );
};
