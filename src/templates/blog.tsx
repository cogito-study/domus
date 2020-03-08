import { Box, Flex, Grid, Heading } from '@chakra-ui/core';
import { Location } from '@reach/router';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React, { FunctionComponent } from 'react';
import Common from '../components/common';
import { BlogPostThumbnail } from '../components/slices/blog-post-thumbnail';
import { Container } from '../components/container';
import styled from '@emotion/styled';

const StyledGrid = styled(Grid)`
  justify-items: start;
`;

const Blog: FunctionComponent<{ data: any; pageContext: { lang: string } }> = ({
  data,
  pageContext: { lang },
}) => {
  const blogposts = data.allPrismicBlogPost.edges;
  console.log(blogposts);

  const seoTitle = `blog`;
  const seoDescription = `Cogito blog`;

  return (
    <Location>
      {({ location }) => (
        <>
          <GatsbySeo
            title={seoTitle}
            description={seoDescription}
            canonical={location.href}
            openGraph={{
              url: location.href,
              title: `${seoTitle} | cogito`,
              description: seoDescription,
              type: 'website',
            }}
          />
          <Box position="fixed" h="100vh" w="100vw" bg="#fff" zIndex={-1} opacity={0.35} />
          <Container pt={[16, 24]}>
            <Flex
              direction="column"
              justify="start"
              px={[0, 4, 4, 4, 0]}
              maxW={['100%', '640px', '640px', '1024px']}
              mb={[6, 6, 12]}
            >
              <Heading
                as="h1"
                color="blue.800"
                mb={[4, 4, 6]}
                fontSize={['xl', 'xl', '2xl']}
                lineHeight="normal"
              >
                Blogposts
              </Heading>
              <StyledGrid
                gridGap={[3, 3, 4, 5, 6]}
                gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
              >
                {blogposts &&
                  blogposts.map((blogpost: any, index: number) => {
                    const { data } = blogpost.node;
                    return (
                      <BlogPostThumbnail
                        mr={12}
                        title={data.title.text}
                        link={`/en/blog/${blogpost.node.slugs[0]}`}
                        image={data.hero_image.localFile.childImageSharp.fixed}
                        image_alt={data.hero_image.alt}
                        key={index}
                      />
                    );
                  })}
              </StyledGrid>
            </Flex>
          </Container>

          <Common lang={lang || 'en-us'} />
        </>
      )}
    </Location>
  );
};

export const query = graphql`
  query Posts {
    allPrismicBlogPost(
      filter: { lang: { eq: "en-us" } }
      sort: { fields: first_publication_date, order: DESC }
    ) {
      edges {
        node {
          first_publication_date
          last_publication_date
          slugs
          data {
            content {
              text
            }
            title {
              text
            }
            hero_image {
              localFile {
                childImageSharp {
                  fixed(height: 190, width: 290, fit: CONTAIN, background: "#CCFFF6") {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              alt
            }
            content {
              html
            }
          }
        }
      }
    }
  }
`;

export default Blog;
