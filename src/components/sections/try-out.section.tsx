import { Flex, H2, Paragraph } from '@cogito-study/alea';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TryOutQuery } from '../../generated/graphql-types';

export const TryOutSection = () => {
  const data = useStaticQuery<TryOutQuery>(graphql`
    query TryOut {
      allPrismicHomeBodyTryOut {
        edges {
          node {
            primary {
              image {
                url
                alt
              }
              image_description {
                text
              }
              subtitle {
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

  if (!data.allPrismicHomeBodyTryOut) return null;

  return (
    <Flex bg="primary.normal">
      {data.allPrismicHomeBodyTryOut.edges.map(({ node: { primary } }) => {
        if (primary) {
          const { image, image_description, subtitle, title } = primary;

          return (
            <>
              <Flex flexDirection="column">
                {image && image.url && <img src={image.url} alt={image.alt || ''} />}
                {image_description && <Paragraph color="grey.light.4">{image_description.text}</Paragraph>}
              </Flex>
              <Flex flexDirection="column">
                {title && <H2 color="grey.light.4">{title.text}</H2>}
                {subtitle && (
                  <Paragraph paragraphSize="large" color="grey.light.4">
                    {subtitle.text}
                  </Paragraph>
                )}
              </Flex>
            </>
          );
        }
      })}
    </Flex>
  );
};
