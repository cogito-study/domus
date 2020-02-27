import { Box, Button, Flex, Heading, Image } from '@chakra-ui/core';
import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import i18n from '../../../config/i18n.js';

export const FeatureSection: FunctionComponent<{ data: any; lang: string }> = ({ data, lang }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems={['center', 'center', 'space-between']}
      mx={[4, 4, 0, 8]}
    >
      {data.map((feature: any, index: number) => {
        const { image, title, description, feature_description } = feature.primary;

        return (
          <Flex
            key={index}
            flexDirection={
              index % 2 == 1
                ? ['column', 'column', 'row-reverse', 'row-reverse']
                : ['column', 'column', 'row', 'row']
            }
            alignItems={['center', 'center', 'space-between']}
            justifyContent={['center', 'center', 'space-between']}
            my={[6, 8, 12]}
            w={['full', '70%', 'full']}
          >
            <Box w={['300px', '300px', '300px', '400px']}>
              <Image alt={image.alt} src={image.url} w="100%" />
            </Box>
            <Flex
              flexDirection="column"
              justifyContent="center"
              maxW={['full', 'full', '300px', '470px']}
              ml={index % 2 == 1 ? 0 : [0, 0, 0, 24]}
              mt={[4, 6, 7, 0]}
            >
              <Heading my={3} fontSize={['lg', 'lg', 'xl']} lineHeight="normal" color="blue.800">
                {title.text}
              </Heading>
              <Box color="grey.800" fontSize="sm" lineHeight="tall">
                {description.text}
              </Box>
              <Link
                style={{
                  maxWidth: '130px',
                }}
                to={`${i18n[lang].path}/feature/${feature_description.slug}`}
              >
                <Button
                  mt={4}
                  variantColor="teal"
                  variant="outline"
                  color="blue.800"
                  borderColor="teal.500"
                  borderWidth={2}
                  borderRadius={0}
                >
                  {i18n[lang].buttons.more}
                </Button>
              </Link>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
