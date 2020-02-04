import { Box, Flex, Heading, Link } from '@chakra-ui/core';
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
    <Flex
      my={12}
      alignItems="center"
      justifyContent="center"
      flexDirection={['column', 'column', 'row']}
      id="tryout"
    >
      <Box maxW={['260px', '360px']}>
        <Heading color="blue.800" fontSize="xl" lineHeight="normal" mb={[6, 16]}>
          {title}
        </Heading>
      </Box>
      <Flex flexDirection={['row']} justifyContent="center" alignItems="start">
        {data.allPrismicHomeBodyCustomer.edges.map((customer: any, index: number) => {
          const { name, icon, url } = customer.node.primary;

          return (
            <Link key={index} href={url.text} target="_blank">
              <Flex
                width={['110px', '110px', '110px', '140px']}
                flexDirection="column"
                mx={[5, 6]}
                alignItems="center"
              >
                <Image fixed={icon.localFile.childImageSharp.fixed} alt={icon.alt} />
                <Heading
                  as="h4"
                  fontSize="sm"
                  lineHeight="normal"
                  color="grey.900"
                  textAlign="center"
                  fontWeight={600}
                >
                  {name.text}
                </Heading>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};
