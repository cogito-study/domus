import { Box, Flex, H1 } from '@cogito-study/alea';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Layout } from '../components/layout';
import { BlogPostSlices } from '../components/slices/blog-post.slices';
import { RelatedBlogPostSlices } from '../components/slices/related-blog-post.slices';

const BlogPostTemplate: FunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <Layout>
      <Flex justifyContent="center">
        <Box width="100%" maxWidth="500px" backgroundColor="grey.light.4">
          <H1 mx={3} mb={4} mt={10} color="primary.dark">
            {data.prismicBlogPost.data.title.text}
          </H1>
          <BlogPostSlices slices={data.prismicBlogPost.data.body} />
          <RelatedBlogPostSlices slices={data.prismicBlogPost.data.body} />
        </Box>
      </Flex>
    </Layout>
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
        body {
          ... on PrismicBlogPostBodyHeader1 {
            primary {
              text {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostBodyHeader2 {
            primary {
              text {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostBodyText {
            primary {
              text {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostBodyImage {
            primary {
              image {
                url
                alt
              }
            }
            slice_type
          }
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
                      url
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
