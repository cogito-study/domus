import { Box, Flex, H2, H3, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../container';

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
    <Container>
      <H2 color="grey.dark.3" mt={9} mb={7}>
        {title}
      </H2>
      {data.allPrismicAboutBodyAchievements.edges.map(({ node: { primary } }, index) => (
        <Flex flexDirection={['column', 'row']} alignItems="center" mb={7} key={index}>
          <Box order={[2, 0]} maxWidth="600px">
            <H3 color="grey.dark.2" mt={0} mb={5}>
              {primary.name.text}
            </H3>
            <Paragraph color="grey.dark.2" mt={0} paragraphSize="medium">
              {primary.description.text}
            </Paragraph>
          </Box>
          {primary.icon.url && (
            <Box order={[1, 0]} ml={[0, 9]} width="180px" height="180px">
              <img src={primary.icon.url} />
            </Box>
          )}
        </Flex>
      ))}
    </Container>
  );
};
