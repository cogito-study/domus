import { css } from '@emotion/core';
import styled from '../../theme/themed-styled';

export const StyledContent = styled.div(
  ({ theme: { fonts, fontSizes, colors, space, sizes, breakpoints } }) => css`
    margin: 0 ${space[3]};
    font-family: ${fonts.body};
    font-weight: 600;
    line-height: 1.8;
    font-size: ${sizes[5]};
    color: ${colors.grey[800]};

    p {
      margin-bottom: ${space[8]};
      font-family: ${fonts.body};
      font-weight: 600;
    }

    h1 {
      margin-bottom: ${space[8]};
      font-family: ${fonts.heading};
      font-size: ${fontSizes['3xl']};
      font-weight: bold;
      color: ${colors.blue[800]};
      line-height: 1.2;
    }

    h2 {
      margin-bottom: ${space[2]};
      margin-top: ${space[8]};
      font-family: ${fonts.heading};
      font-size: ${fontSizes['lg']};
      font-weight: 700;
      color: ${colors.blue[800]};
      line-height: 1.2;
    }

    h3 {
      margin-bottom: ${space[2]};
      margin-top: ${space[8]};
      font-family: ${fonts.heading};
      font-size: ${fontSizes['md']};
      font-weight: 700;
      color: ${colors.grey[700]};
      line-height: 1.2;
    }

    h4 {
      margin-bottom: ${space[3]};
      margin-top: ${space[6]};
      font-family: ${fonts.heading};
      font-size: 15px;
      font-weight: 600;
      color: ${colors.blue[800]};
      line-height: 1.2;
    }

    h5 {
      margin-bottom: ${space[3]};
      margin-top: ${space[6]};
      font-family: ${fonts.heading};
      font-size: 15px;
      font-weight: 600;
      line-height: 1.2;
    }

    a {
      color: ${colors.teal[600]};
      font-weight: 600;
      text-decoration: underline;
      transition: all 250ms;
    }

    a:hover {
      color: ${colors.teal[800]};
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

      h3 {
        font-size: ${fontSizes['lg']};
      }
    }
  `,
);
