import { Box, H3, H4, Paragraph } from '@cogito-study/alea';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { BlogPostQuery } from '../generated/graphql-types';

interface BlogPostProps {
  data: BlogPostQuery;
}

const BlogPostTemplate: FunctionComponent<BlogPostProps> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Box>
          <H3 mb={1} mt={2} color="primary.dark">
            {data.prismicBlogPost.data.title.text}
          </H3>
          <img src={data.prismicBlogPost.data.hero_image.url} />
          <Box>
            {data.prismicBlogPost.data.body.map(({ primary, slice_type }) => (
              <>
                {slice_type == 'header_1' ? <H3>{primary.text.text}</H3> : null}
                {slice_type == 'header_2' ? <H4>{primary.text.text}</H4> : null}
                {slice_type == 'text' ? <Paragraph>{primary.text.text}</Paragraph> : null}
              </>
            ))}
          </Box>
        </Box>
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
        }
      }
    }
  }
`;

export default BlogPostTemplate;
