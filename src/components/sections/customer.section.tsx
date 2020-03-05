import { Flex, Heading, Link } from '@chakra-ui/core';
import Image from 'gatsby-image';
import React, { FunctionComponent } from 'react';

interface CustomerSectionProps {
  title: string;
}

export const CustomerSection: FunctionComponent<CustomerSectionProps & { data: any }> = ({
  title,
  data,
}) => {
  return (
    <Flex
      my={12}
      align="center"
      justify="center"
      direction={['column', 'column', 'row']}
      id="tryout"
    >
      <Heading
        maxW={['260px', '360px']}
        color="blue.800"
        fontSize="xl"
        lineHeight="normal"
        mb={[4, 6]}
      >
        {title}
      </Heading>
      <Flex direction="row" justify="center" align="start">
        {data.map((customer: any, index: number) => {
          const { name, icon, url } = customer.primary;

          return (
            <Link
              key={index}
              href={url.text}
              target="_blank"
              rel="noreferrer noopener"
              _hover={{ textDecoration: 'none' }}
            >
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
                  mt={1}
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
