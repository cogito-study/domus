import { Flex, H3, Paragraph, Button, Box, Anchor } from '@cogito-study/alea';
import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Background = styled(Flex)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 230px;
  z-index: -1;
`;

export const UseCaseSection = () => {
  const data = useStaticQuery(graphql`
    query UseCase {
      allPrismicHomeBodyUseCase {
        edges {
          node {
            primary {
              description {
                text
              }
              title {
                text
              }
              icon {
                url
                alt
              }
              blog_post {
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicHomeBodyUseCase) return null;

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="flex-end">
      <Flex flexWrap="wrap" width={['100%', '65%', '750px', '100%']} justifyContent="center">
        {data.allPrismicHomeBodyUseCase.edges.map((useCase: any, index: number) => {
          const { icon, title, description, blog_post } = useCase.node.primary;

          return (
            <Flex
              backgroundColor="white"
              key={index}
              flexDirection="column"
              width={['100%', '100%', '210px', '260px']}
              my={[4, 4, 6]}
              mx={3}
              alignItems="start"
              justifyContent="space-between"
              border={2}
              borderColor="primary.8"
            >
              <Flex
                mt={[6, 3, 3, 3]}
                mb={[4, 1, 2, 2]}
                mx={[2, 2, 0, 2]}
                flexDirection={['row', 'row', 'column']}
                alignItems={['center', 'center', 'start']}
                justifyContent="center"
              >
                <Box minWidth="90px" width={['90px', '90px', '90px', '110px']}>
                  <img alt={icon.alt} src={icon.url} width="100%" />
                </Box>
                <Flex height={'56px'} alignItems="center">
                  <H3 my={1} mx={[3, 3, 3, 4]} color="primary.8">
                    {title.text}
                  </H3>
                </Flex>
              </Flex>
              <Flex
                mt={1}
                mx={[5, 5, 3, 5]}
                flexDirection="column"
                height={['100%', '200px', '260px', '240px']}
                justifyContent="space-between"
              >
                <Flex flexDirection="column">
                  <Paragraph my={2} color="neutral.8">
                    {description.text}
                  </Paragraph>
                </Flex>
                <Flex justifyContent="center" mb={5} mt={[2, 2, 2, 4]}>
                  <Link to={`/blog/${blog_post.slug}`}>
                    <Button variant="secondary" maxWidth="150px">
                      learn more
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Anchor href="/#tryout">
        <Button variant="primary" maxWidth="150px" mt={4} mb={6}>
          try out!
        </Button>
      </Anchor>
      <Background backgroundColor="primary.8" display={['none', 'none', 'block']} />
    </Flex>
  );
};
