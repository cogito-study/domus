import React, { FunctionComponent } from 'react';
import { Flex, Box, H2, H4 } from '@cogito-study/alea';
import { useStaticQuery, graphql } from 'gatsby';

interface CustomerSectionProps {
  title: string;
}

export const CustomerSection: FunctionComponent<CustomerSectionProps> = ({ title }) => {
  const data = useStaticQuery<any>(graphql`
    query Customer {
      allPrismicHomeBodyCustomer {
        edges {
          node {
            primary {
              name {
                text
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
  `);

  if (!data.allPrismicHomeBodyCustomer) return null;

  return (
    <Flex my={9} alignItems="center" justifyContent="center" flexDirection={['column', 'column', 'row']}>
      <Box maxWidth="360px">
        <H2 color="grey.dark.1">{title}</H2>
      </Box>
      <Flex flexDirection={['row']}>
        {data.allPrismicHomeBodyCustomer.edges.map(
          ({ node: { primary } }, index) =>
            primary &&
            primary.name &&
            primary.icon && (
              <Flex width={['110px', '160px']} flexDirection="column" mx={6} alignItems="center">
                <Box width={['110px', '160px']}>
                  <img width="100%" key={index} src={primary.icon.url}></img>
                </Box>
                <H4 key={index} color="grey.dark.1" textAlign="center">
                  {primary.name.text}
                </H4>
              </Flex>
            ),
        )}
      </Flex>
    </Flex>
  );
};
