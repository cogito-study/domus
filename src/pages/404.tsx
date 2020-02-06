import { Button, Flex, Heading, Image } from '@chakra-ui/core';
import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import travolta from '../../static/travolta.gif';
import SEO from '../components/SEO';

const Notfound: FunctionComponent = () => {
  return (
    <>
      <SEO />
      <Flex
        align="center"
        justify="center"
        direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        mt={10}
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
            <Link to="/">
              <Button
                borderRadius={0}
                variantColor="teal"
                bg="teal.500"
                color="blue.800"
                mr={4}
                fontSize="sm"
              >
                back to home
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                borderRadius={0}
                borderColor="teal.500"
                borderWidth={2}
                color="blue.800"
                bg="fff"
                fontSize="sm"
              >
                contact us
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Notfound;
