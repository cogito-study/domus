import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box, H3, Paragraph } from '@cogito-study/alea';
import { UseCaseQuery, Maybe } from '../../generated/graphql-types';

interface UseCaseProps {
  title?: Maybe<string>;
  description?: Maybe<string>;
}

const UseCase: FunctionComponent<UseCaseProps> = ({ title, description }) => (
  <Flex flexDirection="column" color="primary" border="2px solid red">
    <H3 color="primary">{title}</H3>
    <Paragraph color="grey.dark.3">{description}</Paragraph>
  </Flex>
);

export const UseCaseSection = () => {
  const data = useStaticQuery<UseCaseQuery>(graphql`
    query UseCase {
      allPrismicHomeBodyUseCase {
        edges {
          node {
            primary {
              description {
                text
              }
              title {
                text
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <Flex>
      {data.allPrismicHomeBodyUseCase &&
        data.allPrismicHomeBodyUseCase.edges.map((node, index) => {
          const {
            node: { primary },
          } = node;
          if (primary && primary.description && primary.title) {
            return <UseCase key={index} title={primary.title.text} description={primary.description.text} />;
          }
        })}
    </Flex>
  );
};
