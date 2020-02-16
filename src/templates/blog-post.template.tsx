import { Box, Flex, Heading } from '@chakra-ui/core';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import SEO from '../components/SEO';
import { RelatedBlogPostSlices } from '../components/slices/related-blog-post.slices';
import { StyledContent } from '../components/styled/styled-content';
import Common from '../components/common';

const BlogPostTemplate: FunctionComponent<{ data: any; pageContext: { lang } }> = ({
  data,
  pageContext: { lang },
}) => {
  const { title, hero_image, content, body } = data.prismicBlogPost.data;

  return (
    <>
      <SEO individual title={`${title.text.toLowerCase()} | blog`} banner={hero_image.url} />
      <Box position="fixed" h="100vh" w="100vw" bg="#fff" zIndex={-1} opacity={0.35} />
      <Flex justify="center" direction="column" align="center" mb={6}>
        <Box mt={[24, 32]} width="100%" maxW="580px" bg="transparent">
          <Heading
            as="h1"
            mx={3}
            mb={4}
            fontSize={['xl', '2xl']}
            color="blue.800"
            lineHeight="normal"
          >
            {title.text}
          </Heading>
          <StyledContent dangerouslySetInnerHTML={{ __html: content.html }} />
        </Box>
        {body && <RelatedBlogPostSlices slices={body} />}
      </Flex>
      <Common lang={lang} />
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
