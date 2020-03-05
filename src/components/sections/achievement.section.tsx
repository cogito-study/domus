import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/core';
import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface AchievementSectionProps {
  title: string;
  data: any;
  lang: string;
}

export const AchievementSection: FunctionComponent<AchievementSectionProps> = ({
  title,
  data,
  lang,
}) => {
  const contactData = useStaticQuery(graphql`
    query AchievementContact {
      allPrismicContact {
        edges {
          node {
            lang
            data {
              address {
                text
              }
              e_mail {
                text
              }
              phone_number {
                text
              }
              body {
                ... on PrismicContactBodySocialMedia {
                  slice_type
                  primary {
                    url {
                      url
                    }
                    icon {
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
  `);

  const filteredContact = contactData.allPrismicContact.edges.filter(
    (filtered) => filtered.node.lang == lang,
  );
  const socialSection = filteredContact[0].node.data.body.filter(
    (slice) => slice.slice_type === 'social_media',
  );
  return (
    <Flex direction="column" px={[0, 4, 4, 4, 0]}>
      <Heading color="grey.800" mt={32} mb={12} fontSize={['lg', 'lg', 'xl']}>
        {title}
      </Heading>
      {data.map((achievement: any, index: any) => {
        const { name, description, icon } = achievement.primary;
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
                <Image src={icon.url} alt={icon.alt} />
              </Box>
            )}
          </Flex>
        );
      })}
      <Flex mr={[0, 0, 0, 16]} mb={12} mt={0}>
        {socialSection.map((socialItem: any, index: number) => {
          const { url, icon } = socialItem.primary;
          return (
            <Box key={index} mx={2}>
              <Link href={url.url}>
                <Image src={icon.url} alt={icon.alt} />
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
