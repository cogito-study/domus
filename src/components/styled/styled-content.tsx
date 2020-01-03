import { css } from '@emotion/core';
import styled from '../../theme/themed-styled';

export const StyledContent = styled.div(
  ({ theme: { fonts, fontSizes, colors, space, sizes, breakpoints } }) => css`
    margin: 0 ${space[3]};
    font-family: ${fonts.body};
    font-weight: 600;
    line-height: 1.8;
    font-size: ${sizes[4]};
    margin-bottom: ${space[10]};
    color: ${colors.grey[800]};

    h1 {
      margin-bottom: ${space[4]};
      font-family: ${fonts.heading};
      font-size: ${fontSizes['3xl']};
      font-weight: bold;
      color: ${colors.blue[800]};
      line-height: 1.2;
    }

    h2 {
      margin-bottom: ${space[4]};
      margin-top: ${space[8]};
      font-family: ${fonts.heading};
      font-size: ${fontSizes['lg']};
      font-weight: 700;
      color: ${colors.blue[800]};
      line-height: 1.2;
    }

    ul {
      margin-left: ${space[6]};
    }

    @media screen and (min-width: ${breakpoints[0]}) {
      h1 {
        font-size: ${fontSizes['5xl']};
      }

      h2 {
        font-size: ${fontSizes['xl']};
      }
    }
  `,
);
