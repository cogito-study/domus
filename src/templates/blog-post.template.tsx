import { Box, Flex, Heading } from '@chakra-ui/core';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { RelatedBlogPostSlices } from '../components/slices/related-blog-post.slices';
import { StyledContent } from '../components/styled/styled-content';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const BlogPostTemplate: FunctionComponent<{ data: any }> = ({ data }) => {
  const { title, hero_image, content, body } = data.prismicBlogPost.data;
  console.log(hero_image);
  const description = content.text.slice(0, 50);
  return (
    <>
      <GatsbySeo
        title={`${title.text} | blog | cogito`}
        description={description}
        canonical="https://cogito.study/blog"
        openGraph={{
          url: 'https://cogito.study/blog',
          title: `${title.text} | blog | cogito`,
          description: description,
          images: [
            {
              url: hero_image.url,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'cogito - collaborative e-learning platform',
        }}
        twitter={{
          handle: '@cogitostudy',
          site: '@cogito.study',
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
