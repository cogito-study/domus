import { Box, Flex, H2, H3, Paragraph } from '@cogito-study/alea';
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
    }
  `);

  if (!data.allPrismicAboutBodyAchievements) return null;

  return (
    <>
      <H2 color="neutral.8" mt={9} mb={7}>
        {title}
      </H2>
      {data.allPrismicAboutBodyAchievements.edges.map((achievement: any, index: any) => {
        const { name, description, icon } = achievement.node.primary;
        return (
          <Flex flexDirection={['column', 'row']} alignItems="center" mb={7} key={index}>
            <Box order={[2, 0]} maxWidth="600px">
              <H3 color="neutral.7" mt={0} mb={5}>
                {name.text}
              </H3>
              <Paragraph color="neutral.7" mt={0} paragraphSize="medium">
                {description.text}
              </Paragraph>
            </Box>
            <Box order={[1, 0]} ml={[0, 9]} width="180px" height="180px">
              <img src={icon.url} />
            </Box>
          </Flex>
        );
      })}
    </>
  );
};
