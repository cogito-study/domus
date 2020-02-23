import { Box, Flex, Heading } from '@chakra-ui/core';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { RelatedBlogPostSlices } from '../components/slices/related-blog-post.slices';
import { StyledContent } from '../components/styled/styled-content';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const BlogPostTemplate: FunctionComponent<{ data: any }> = ({ data }) => {
  const { title, hero_image, content, body } = data.prismicBlogPost.data;

  return (
    <>
      <GatsbySeo
        title={title}
        description={`${content.substring(0, 100)}...`}
        canonical="https://cogito.study/blog"
        openGraph={{
          url: 'https://cogito.study/blog',
          title: title,
          description: `${content.substring(0, 100)}...`,
          images: [
            {
              url: hero_image,
              alt: 'Og Image Alt',
            },
          ],
          site_name: `${title} | blog | cogito`,
        }}
        twitter={{
          handle: '@cogitostudy',
          site: '@cogitostudy',
          cardType: 'summary_large_image',
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
        {body && <RelatedBlogPostSlices slices={body} />}
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
