import React, { FunctionComponent } from 'react';
import { Box, H3, H2, Paragraph, Flex } from '@cogito-study/alea';

interface BlogPostSliceProps {
  slices: any[];
}

export const BlogPostSlices: FunctionComponent<BlogPostSliceProps> = ({ slices }) => {
  return (
    <Flex mx={3} flexDirection="column" backgroundColor="grey.light.4" minHeight="80vh">
      {slices.map(({ primary, slice_type }) => {
        switch (slice_type) {
          case 'header_1':
            return (
              <H2 color="primary.dark" mt={5} mb={4}>
                {primary.text.text}
              </H2>
            );
          case 'header_2':
            return (
              <H3 color="primary.dark" mt={5} mb={4}>
                {primary.text.text}
              </H3>
            );
          case 'text':
            return (
              <Paragraph color="grey.dark.3" my={4}>
                {primary.text.text}
              </Paragraph>
            );
          case 'image':
            return (
              <Box my={7}>
                <img src={primary.image.url} alt={primary.image.alt} />
              </Box>
            );
          default:
            return null;
        }
      })}
    </Flex>
  );
};
