import { Flex, H3, Paragraph, Button, Box } from '@cogito-study/alea';
import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';

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
    <Flex flexDirection="column" alignItems="center">
      <Flex flexWrap="wrap" width={['100%', '70%', '750px', '100%']} justifyContent="center">
        {data.allPrismicHomeBodyUseCase.edges.map((useCase: any, index: number) => {
          const { icon, title, description, blog_post } = useCase.node.primary;

          return (
            <Flex
              backgroundColor="white"
              key={index}
              flexDirection="column"
              width={['100%', '100%', '210px', '260px']}
              mx={[0, 2]}
              my={3}
              px={[2, 2, 2, 4]}
              pb={[4, 4, 4, 6]}
              pt={[2, 2, 2, 3]}
              alignItems="start"
              justifyContent="space-between"
              border={2}
              borderColor="primary.dark"
            >
              <Flex flexDirection={['row', 'row', 'column']} alignItems={['center', 'center', 'start']}>
                <Box minWidth="90px" width={['90px', '90px', '90px', '110px']}>
                  <img alt={icon.alt} src={icon.url} width="100%" />
                </Box>
                <Flex height={'56px'} alignItems="center">
                  <H3 my={1} mx={[2, 2, 2, 4]} color="primary.dark">
                    {title.text}
                  </H3>
                </Flex>
              </Flex>
              <Flex
                mt={1}
                px={[2, 2, 2, 4]}
                flexDirection="column"
                height={['100%', '100%', '220px', '200px']}
                justifyContent="space-between"
              >
                <Flex flexDirection="column">
                  <Paragraph my={2} color="grey.dark.3">
                    {description.text}
                  </Paragraph>
                </Flex>
                <Flex justifyContent="center">
                  <Link to={`/blog/${blog_post.slug}`}>
                    <Button variant="secondary" maxWidth="150px" mt={4}>
                      learn more
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Button variant="primary" maxWidth="150px" mt={4}>
        try out!
      </Button>
    </Flex>
  );
};
