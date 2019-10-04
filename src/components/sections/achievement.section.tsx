import { Box, Flex, Heading, Text, Link } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';

interface AchievementSectionProps {
  title: string;
}

export const AchievementSection: FunctionComponent<AchievementSectionProps> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query Achievement {
      allPrismicAboutBodyAchievements {
        edges {
          node {
            primary {
              name {
                text
              }
              description {
                text
              }
              icon {
                url
              }
            }
          }
        }
      }
      allPrismicContactBodySocialMedia {
        edges {
          node {
            primary {
              url {
                url
              }
              icon {
                url
              }
            }
          }
        }
      }
    }
  `);

  if (!data.allPrismicAboutBodyAchievements) return null;

  return (
    <Flex flexDirection="column" px={[0, 4, 4, 4, 0]}>
      <Heading as="h2" color="neutral.8" mt={9} mb={7}>
        {title}
      </Heading>
      {data.allPrismicAboutBodyAchievements.edges.map((achievement: any, index: any) => {
        const { name, description, icon } = achievement.node.primary;
        return (
          <Flex
            flexDirection={['column', 'column', 'row']}
            alignItems={['start', 'start', 'center']}
            mb={6}
            key={index}
          >
            <Box order={[2, 0]} maxWidth="600px">
              <Heading as="h3" color="neutral.7" mt={0} mb={5}>
                {name.text}
              </Heading>
              <Text color="neutral.7" mt={0}>
                {description.text}
              </Text>
            </Box>
            {icon.url && (
              <Box order={[1, 0]} ml={[0, 0, 9]} width="180px" height="180px">
                <img src={icon.url} />
              </Box>
            )}
          </Flex>
        );
      })}
      <Flex mr={[0, 0, 0, 8]} mb={7} mt={0}>
        {data.allPrismicContactBodySocialMedia.edges.map(({ node }, index) => (
          <Box key={index} mx={2}>
            <Link href={node.primary.url.url}>
              <img src={node.primary.icon.url} />
            </Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
