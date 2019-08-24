import { Anchor, Box, Button, H3, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { BlogQuery } from '../generated/graphql-types';

const Blog = () => {
  const data = useStaticQuery<BlogQuery>(graphql`
    query Blog {
      allPrismicBlogPost {
        edges {
          node {
            slugs
            data {
              title {
                text
              }
              hero_image {
                url
              }
              content {
                text
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
      }
    }
  `);

  if (!data.allPrismicBlogPost) return null;

  return (
    <Layout>
      <Container>
        {data.allPrismicBlogPost.edges.map(({ node }) => (
          <Box>
            <H3 mb={1} mt={2} color="primary.dark">
              {node.data.title.text}
            </H3>
            <img src={node.data.hero_image.url} />
            <Paragraph>{node.data.content.text}</Paragraph>
            <Anchor href={`/blog/${node.slugs[0]}`}><Button>Read more</Button></Anchor>
            <hr/>
          </Box>
          ))}
      </Container>
    </Layout>
  );
};

export default Blog;
