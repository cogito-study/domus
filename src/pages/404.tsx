import { Button, Flex, Heading, Image } from '@chakra-ui/core';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React, { FunctionComponent } from 'react';
import travolta from '../../static/travolta.gif';

const Notfound: FunctionComponent = () => {
  return (
    <>
      <GatsbySeo />
      <Flex
        align="center"
        justify="center"
        direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        mt={16}
      >
        <Flex w={['250px', '250px', '350px', '550px']} h={['250px', '250px', '350px', '550px']}>
          <Image src={travolta} w="100%" h="100%" />
        </Flex>
        <Flex
          ml={5}
          mb={8}
          mt={['10', '10', '10', '0']}
          direction="column"
          align="start"
          justify="center"
        >
          <Flex maxW="550px" direction="column" mb={6}>
            <Heading
              as="h1"
              mt={0}
              mb={0}
              color="grey.600"
              lineHeight="normal"
              fontSize={['50px', '90px']}
            >
              Error 404
            </Heading>
            <Heading lineHeight="normal" color="grey.400" fontSize={['lg', 'xl']}>
              We can’t seem to find the page you’re looking for
            </Heading>
          </Flex>
          <Flex>
            <Button
              as="a"
              //@ts-ignore
              href="/"
              borderRadius={0}
              variantColor="teal"
              color="blue.800"
              mr={4}
            >
              back to home
            </Button>
            <Button
              as="a"
              //@ts-ignore
              href="/en/contact"
              borderRadius={0}
              variant="outline"
              variantColor="teal"
              borderColor="teal.500"
              borderWidth={2}
              color="blue.800"
            >
              contact us
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Notfound;
