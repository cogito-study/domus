import { Box, Flex, Heading } from '@chakra-ui/core';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React, { FunctionComponent } from 'react';
import Common from '../components/common';
import { RelatedBlogPostSlices } from '../components/slices/related-blog-post.slices';
import { StyledContent } from '../components/styled/styled-content';

const BlogPostTemplate: FunctionComponent<{ data: any; pageContext: { lang: string } }> = ({
  data,
  pageContext: { lang },
}) => {
  const blogData = data.prismicFeatureDescription
    ? data.prismicFeatureDescription.data
    : data.prismicBlogPost.data;
  const { title, hero_image, content, body } = blogData;

  const seoTitle = `${title.text.toLowerCase()} | blog`;
  const seoDescription = `${content.text.substring(0, 40)}...`;

  return (
    <>
      <GatsbySeo
        title={seoTitle}
        description={seoDescription}
        canonical="https://cogito.study/en/blog"
        openGraph={{
          title: `${seoTitle} | cogito`,
          description: seoDescription,
          type: 'article',
          images: [
            {
              url: hero_image.url,
              width: 800,
              height: 600,
            },
          ],
        }}
      />
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
        {body && <RelatedBlogPostSlices slices={body} lang={lang} />}
      </Flex>
      <Common lang="en-us" />
    </>
  );
};

export const query = graphql`
  query PostBySlug($uid: String!, $lang: String!) {
    prismicFeatureDescription(slugs: { eq: $uid }, lang: { eq: $lang }) {
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
          ... on PrismicFeatureDescriptionBodyRelatedPosts {
            slice_type
            primary {
              feature_description {
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
