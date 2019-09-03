import React, { FunctionComponent } from 'react';
import { Flex, Box, H2, H4 } from '@cogito-study/alea';
import { useStaticQuery, graphql } from 'gatsby';

interface CustomerSectionProps {
  title: string;
}

export const CustomerSection: FunctionComponent<CustomerSectionProps> = ({ title }) => {
  const data = useStaticQuery(graphql`
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
    <Flex my={7} alignItems="center" justifyContent="center" flexDirection={['column', 'column', 'row']}>
      <Box maxWidth={['260px', '360px']}>
        <H2 color="grey.dark.1" mb={[6, 8]}>
          {title}
        </H2>
      </Box>
      <Flex flexDirection={['row']} justifyContent="center" alignItems="center">
        {data.allPrismicHomeBodyCustomer.edges.map(
          ({ node: { primary } }, index) =>
            primary &&
            primary.name &&
            primary.icon && (
              <Flex
                key={index}
                width={['110px', '110px', '110px', '140px']}
                flexDirection="column"
                mx={[5, 6]}
                alignItems="center"
              >
                <img width="100%" src={primary.icon.url}></img>
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
