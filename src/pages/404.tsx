import React, { FunctionComponent } from 'react';
import { Flex, H1, H2, Button } from '@cogito-study/alea';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import SEO from '../components/SEO';
import { Container } from '../components/container';
import travolta from '../../static/travolta.gif';

const Notfound: FunctionComponent = () => {
  return (
    <Layout>
      <SEO />
      <Container
        alignItems="center"
        justifyContent="center"
        flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        mt={10}
      >
        <Flex width={['250px', '250px', '350px', '550px']} height={['250px', '250px', '350px', '550px']}>
          <img src={travolta} width="100%" height="100%"></img>
        </Flex>
        <Flex ml={5} mb={7} flexDirection="column" alignItems="start" justifyContent="center">
          <Flex maxWidth="550px" flexDirection="column" mb={6}>
            <H1 mt={0} mb={0} color="neutral.6" fontSize={['50px', '90px']}>
              Error 404
            </H1>
            <H2 color="neutral.4">We can’t seem to find the page you’re looking for</H2>
          </Flex>
          <Flex>
            <Link to="/">
              <Button mr={4}>back to home</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">contact us</Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Notfound;
