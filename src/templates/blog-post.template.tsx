import { Box } from '@chakra-ui/core';
import { Flex, H1 } from '@cogito-study/alea';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import SEO from '../components/SEO';
import { StyledContent } from '../components/styled/styled-content';
import { RelatedBlogPostSlices } from '../components/slices/related-blog-post.slices';

const BlogPostTemplate: FunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <>
      <SEO
        individual
        title={`${data.prismicBlogPost.data.title.text.toLowerCase()} | blog`}
        banner={data.prismicBlogPost.data.hero_image.url}
      />
      <Box position="fixed" h="100vh" w="100vw" backgroundColor="#fff" zIndex={-1} opacity={0.35} />
      <Flex justifyContent="center" flexDirection="column" alignItems="center">
        <Box width="100%" maxWidth="580px" backgroundColor="transparent">
          <H1 mx={3} mb={4} mt={[9, 10]} color="primary.8">
            {data.prismicBlogPost.data.title.text}
          </H1>
          <StyledContent
            dangerouslySetInnerHTML={{ __html: data.prismicBlogPost.data.content.html }}
          />
        </Box>
        <RelatedBlogPostSlices slices={data.prismicBlogPost.data.body} />
      </Flex>
    </>
  );
};

export const query = graphql`
  query PostBySlug($uid: String!) {
    prismicBlogPost(slugs: { eq: $uid }) {
      data {
        content {
          text
        }
        title {
          text
        }
        hero_image {
          url
        }
        content {
          html
        }
        body {
          ... on PrismicBlogPostBodyRelatedPosts {
            slice_type
            primary {
              blog_post {
                slug
                document {
                  data {
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;
