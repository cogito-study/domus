import { Box, Flex, H2, H4, Anchor } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';

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
                alt
                localFile {
                  childImageSharp {
                    fixed(width: 110, height: 110) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              url {
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
    <Flex my={7} alignItems="center" justifyContent="center" flexDirection={['column', 'column', 'row']}>
      <Box maxWidth={['260px', '360px']}>
        <H2 color="grey.dark.1" mb={[6, 8]}>
          {title}
        </H2>
      </Box>
      <Flex flexDirection={['row']} justifyContent="center" alignItems="start">
        {data.allPrismicHomeBodyCustomer.edges.map((customer: any, index: number) => {
          const { name, icon, url } = customer.node.primary;

          return (
            <Anchor key={index} href={url.text} target="_blank">
              <Flex width={['110px', '110px', '110px', '140px']} flexDirection="column" mx={[5, 6]} alignItems="center">
                <Image fixed={icon.localFile.childImageSharp.fixed} alt={icon.alt} />
                <H4 color="grey.dark.1" textAlign="center">
                  {name.text}
                </H4>
              </Flex>
            </Anchor>
          );
        })}
      </Flex>
    </Flex>
  );
};
