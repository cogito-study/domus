import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/core';
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
    <Flex direction="column" px={[0, 4, 4, 4, 0]}>
      <Heading color="grey.800" mt={32} mb={12} fontSize={['lg', 'lg', 'xl']}>
        {title}
      </Heading>
      {data.allPrismicAboutBodyAchievements.edges.map((achievement: any, index: any) => {
        const { name, description, icon } = achievement.node.primary;
        return (
          <Flex
            direction={['column', 'column', 'row']}
            align={['start', 'start', 'center']}
            mb={8}
            key={index}
          >
            <Box order={[2, 0]} maxW="600px">
              <Heading as="h3" fontSize={['md', 'md', 'lg']} color="grey.700" mt={0} mb={6}>
                {name.text}
              </Heading>
              <Text color="grey.700" mt={0} fontSize="sm">
                {description.text}
              </Text>
            </Box>
            {icon.url && (
              <Box order={[1, 0]} ml={[0, 0, 32]} w="180px" h="180px">
                <Image src={icon.url} />
              </Box>
            )}
          </Flex>
        );
      })}
      <Flex mr={[0, 0, 0, 16]} mb={12} mt={0}>
        {data.allPrismicContactBodySocialMedia.edges.map(({ node }, index: number) => (
          <Box key={index} mx={2}>
            <Link href={node.primary.url.url}>
              <Image src={node.primary.icon.url} />
            </Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
