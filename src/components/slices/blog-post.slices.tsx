import React, { FunctionComponent } from 'react';
import { Box, H3, H2, Paragraph } from '@cogito-study/alea';

interface BlogPostSliceProps {
  slices: Array<any>;
}

export const BlogPostSlices: FunctionComponent<BlogPostSliceProps> = ({ slices }) => {
  console.log(slices);
  return (
    <>
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
    </>
  );
};
