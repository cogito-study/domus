import { Box, H1, H4, Paragraph } from '@cogito-study/alea';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { BlogPostQuery } from '../generated/graphql-types';
import { BlogPostSlices } from '../components/slices/blog-post-slices';

interface BlogPostProps {
  data: BlogPostQuery;
}

const BlogPostTemplate: FunctionComponent<BlogPostProps> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <H1 mb={6} mt={2} color="primary.dark">
          {data.prismicBlogPost.data.title.text}
        </H1>
        <BlogPostSlices slices={data.prismicBlogPost.data.body} />
      </Container>
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
        }
      }
    }
  }
`;

export default BlogPostTemplate;
